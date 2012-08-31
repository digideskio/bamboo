import json
from math import isnan
import re

from dateutil.parser import parse as date_parse
import numpy as np

from constants import ERROR, JSON_NULL, LABEL, MONGO_RESERVED_KEYS,\
    MONGO_RESERVED_KEY_PREFIX, SCHEMA


def is_float_nan(num):
    return isinstance(num, float) and isnan(num)


def get_json_value(value):
    if is_float_nan(value):
        return JSON_NULL
    if isinstance(value, np.int64):
        return int(value)
    return value


def series_to_jsondict(series):
    return series if series is None else dict([
        (str(key), get_json_value(value))
        for key, value in series.iteritems()
    ])


def df_to_jsondict(dframe):
    return [series_to_jsondict(series) for idx, series in dframe.iterrows()]


def dump_or_error(data, error_message):
    if data is None:
        data = {ERROR: error_message}
    return json.dumps(data)


def prefix_reserved_key(key):
    """
    Prefix reserved key
    """
    return '%s%s' % (MONGO_RESERVED_KEY_PREFIX, key)


def slugify_columns(column_names):
    """
    Convert non-alphanumeric characters in column names into underscores and
    ensure that all column names are unique.
    """
    # we need to change this to deal with the following conditions:
    # * _id as a key (mongo)
    # * keys that start with a $ or contain a . (mongo)
    # * keys that contain spaces or operators (parsing)
    encode_column_re = re.compile(r'\W')

    encoded_names = []

    for column_name in column_names:
        new_col_name = prefix_reserved_key(column_name) if\
            column_name in MONGO_RESERVED_KEYS else\
            encode_column_re.sub('_', column_name).lower()
        while new_col_name in encoded_names:
            new_col_name += '_'
        encoded_names.append(new_col_name)
    return encoded_names


def build_labels_to_slugs(dataset):
    """
    Map the column labels back to their slugified versions
    """
    return dict([(column_attrs[LABEL], column_name) for
                 (column_name, column_attrs) in dataset[SCHEMA].items()])


def recognize_dates(dframe):
    """
    Check if object columns in a dataframe can be parsed as dates.
    If yes, rewrite column with values parsed as dates.
    """
    for idx, dtype in enumerate(dframe.dtypes):
        if dtype.type == np.object_:
            try:
                column = dframe.columns[idx]
                # attempt to parse first entry as a date
                date_parse(dframe[column][0])
                # it is parseable as a date, convert column to date
                dframe[column] = dframe[column].map(date_parse)
            except ValueError:
                # it is not a correctly formatted date
                pass
    return dframe
