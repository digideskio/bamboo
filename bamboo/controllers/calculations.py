from bamboo.controllers.abstract_controller import AbstractController
from bamboo.core.parser import ParseError
from bamboo.models.calculation import Calculation
from bamboo.models.dataset import Dataset


class Calculations(AbstractController):
    """The Calculations Controller provides access to calculations.

    Calculations are formulas and names that (for now) must be linked to a
    specific dataset via that dataset's ID. All actions in the Calculations
    Controller can optionally take a *callback* parameter.  If passed the
    returned result will be wrapped this the parameter value.  E.g., is
    ``callback=parseResults`` the returned value will be
    ``parseResults([some-JSON])``, where ``some-JSON`` is the function return
    value.
    """

    def delete(self, dataset_id, name, group=None):
        """Delete the calculation with *name* from the dataset.

        Delete the calculation with column *name* from the dataset specified by
        the hash *dataset_id* from mongo. If it is an aggregate calculation a
        *group* must also be passed to determine the correct aggregate
        calculation to delete. This will also remove the column *name* from the
        dataframe for the dataset or the aggregate dataset.

        Args:

        - dataset_id: The dataset ID for which to delete the calculation.
        - name: The name of the calculation to delete.
        - group: The group of the calculation to delete, if an aggregation.

        Returns:
            JSON with success if delete or an error string if the calculation
            could not be found.
        """
        result = None

        calculation = Calculation.find_one(dataset_id, name, group)
        if calculation:
            dataset = Dataset.find_one(dataset_id)
            calculation.delete(dataset)
            result = {self.SUCCESS: 'deleted calculation: %s for dataset: %s' %
                      (name, dataset_id)}
        return self.dump_or_error(result,
                                  'name and dataset_id combination not found')

    def create(self, dataset_id, formula, name, group=None):
        """Add a calculation to a dataset with the given fomula, etc.

        Create a new calculation for *dataset_id* named *name* that calulates
        the *formula*.  Variables in formula can only refer to columns in the
        dataset.

        Args:

        - dataset_id: The dataset ID to add the calculation to.
        - formula: The formula for the calculation which must match the
          parser language.
        - name: The name to assign the new column for this formula.
        - group: A column to group by for aggregations, must be a dimension.

        Returns:
            A success string is the calculation is create. An error string if
            the dataset could not be found, the formula could not be parsed, or
            the group was invalid.
        """
        def _action(dataset, formula=formula, name=name, group=group):
            Calculation.create(dataset, formula, name, group)
            return {
                self.SUCCESS: 'created calulcation: %s for dataset: %s'
                % (name, dataset_id)}
        return self._safe_get_and_call(
            dataset_id, _action, formula=formula, name=name, group=group,
            exceptions=(ParseError,))

    def show(self, dataset_id, callback=False):
        """Retrieve the calculations for *dataset_id*.

        Args:

        - dataset_id: The dataset to show calculations for.
        - callback: A JSONP callback function string.

        Returns:
            A list of calculation records.  Each calculation record shows the
            calculations name, formula, group (if it exists), and state.
        """
        dataset = Dataset.find_one(dataset_id)
        result = None

        if dataset:
            # get the calculations
            result = dataset.calculations()
            result = [x.clean_record for x in result]
        return self.dump_or_error(result, 'dataset_id not found', callback)
