Search.setIndex({envversion:46,filenames:["advanced_commands","aggregations","basic_commands","calculations","class_structure","config","contributing","controllers","core","examples","index","lib","manipulating_data","models","plotting","server_setup"],objects:{"bamboo.config":{db:[5,0,0,"-"]},"bamboo.config.db":{Database:[5,2,1,""]},"bamboo.config.db.Database":{client:[5,3,1,""],create_db:[5,3,1,""],db:[5,3,1,""]},"bamboo.core":{aggregations:[8,0,0,"-"],calculator:[8,0,0,"-"],frame:[8,0,0,"-"],merge:[8,0,0,"-"],operations:[8,0,0,"-"],summary:[8,0,0,"-"]},"bamboo.core.aggregations":{Aggregation:[8,2,1,""],ArgMaxAggregation:[8,2,1,""],CountAggregation:[8,2,1,""],MaxAggregation:[8,2,1,""],MeanAggregation:[8,2,1,""],MedianAggregation:[8,2,1,""],MinAggregation:[8,2,1,""],NewestAggregation:[8,2,1,""],PearsonAggregation:[8,2,1,""],RatioAggregation:[8,2,1,""],StandardDeviationAggregation:[8,2,1,""],SumAggregation:[8,2,1,""],VarianceAggregation:[8,2,1,""]},"bamboo.core.aggregations.Aggregation":{agg:[8,4,1,""],group:[8,4,1,""]},"bamboo.core.aggregations.ArgMaxAggregation":{group:[8,4,1,""]},"bamboo.core.aggregations.RatioAggregation":{reduce:[8,4,1,""]},"bamboo.core.aggregator":{Aggregator:[8,2,1,""]},"bamboo.core.aggregator.Aggregator":{save:[8,4,1,""],update:[8,4,1,""],updated_dframe:[8,4,1,""]},"bamboo.core.calculator":{"__calculation_data":[8,1,1,""],"__propagate_column":[8,1,1,""],"__update_aggregate_dataset":[8,1,1,""],"__update_is_valid":[8,1,1,""],"__update_joined_datasets":[8,1,1,""],calculate_columns:[8,1,1,""],dframe_from_update:[8,1,1,""]},"bamboo.core.frame":{add_parent_column:[8,1,1,""],join_dataset:[8,1,1,""],remove_reserved_keys:[8,1,1,""],rows_for_parent_id:[8,1,1,""]},"bamboo.core.merge":{MergeError:[8,5,1,""],merge_dataset_ids:[8,1,1,""]},"bamboo.core.operations":{EvalAndOp:[8,2,1,""],EvalBinaryArithOp:[8,2,1,""],EvalBinaryBooleanOp:[8,2,1,""],EvalCaseOp:[8,2,1,""],EvalComparisonOp:[8,2,1,""],EvalConstant:[8,2,1,""],EvalDate:[8,2,1,""],EvalExpOp:[8,2,1,""],EvalFunction:[8,2,1,""],EvalInOp:[8,2,1,""],EvalMapOp:[8,2,1,""],EvalMultOp:[8,2,1,""],EvalNotOp:[8,2,1,""],EvalOrOp:[8,2,1,""],EvalPercentile:[8,2,1,""],EvalPlusOp:[8,2,1,""],EvalSignOp:[8,2,1,""],EvalString:[8,2,1,""],EvalTerm:[8,2,1,""],EvalToday:[8,2,1,""]},"bamboo.core.operations.EvalTerm":{operator_operands:[8,4,1,""]},"bamboo.core.parser":{Parser:[8,2,1,""]},"bamboo.core.parser.Parser":{"_Parser__build_bnf":[8,4,1,""],parse:[8,3,1,""],store_aggregation:[8,4,1,""],validate:[8,3,1,""],validate_formula:[8,3,1,""]},"bamboo.core.summary":{ColumnTypeError:[8,5,1,""],summarizable:[8,1,1,""],summarize:[8,1,1,""],summarize_df:[8,1,1,""],summarize_series:[8,1,1,""],summarize_with_groups:[8,1,1,""]},"bamboo.lib":{async:[11,0,0,"-"],datetools:[11,0,0,"-"],jsontools:[11,0,0,"-"],mongo:[11,0,0,"-"],readers:[11,0,0,"-"],schema_builder:[11,0,0,"-"],utils:[11,0,0,"-"]},"bamboo.lib.async":{call_async:[11,1,1,""]},"bamboo.lib.datetools":{parse_timestamp_query:[11,1,1,""],recognize_dates:[11,1,1,""]},"bamboo.lib.jsontools":{JSONError:[11,5,1,""],df_to_json:[11,1,1,""],df_to_jsondict:[11,1,1,""],get_json_value:[11,1,1,""],series_to_jsondict:[11,1,1,""]},"bamboo.lib.mongo":{"_is_invalid_for_mongo":[11,1,1,""],df_mongo_decode:[11,1,1,""],dict_for_mongo:[11,1,1,""],dump_mongo_json:[11,1,1,""],key_for_mongo:[11,1,1,""],remove_mongo_reserved_keys:[11,1,1,""],reserve_encoded:[11,1,1,""],value_for_mongo:[11,1,1,""]},"bamboo.lib.schema_builder":{"_slugify_columns":[11,1,1,""],Schema:[11,2,1,""],filter_schema:[11,1,1,""],make_unique:[11,1,1,""],schema_from_dframe:[11,1,1,""]},"bamboo.lib.schema_builder.Schema":{"_resluggable_column":[11,4,1,""],labels_to_slugs:[11,6,1,""],rebuild:[11,4,1,""],rename_map_for_dframe:[11,4,1,""],safe_init:[11,3,1,""],set_olap_type:[11,4,1,""]},"bamboo.lib.utils":{combine_dicts:[11,1,1,""],is_float_nan:[11,1,1,""],replace_keys:[11,1,1,""]},"bamboo.models.abstract_model":{AbstractModel:[13,2,1,""]},"bamboo.models.abstract_model.AbstractModel":{"delete":[13,4,1,""],clean_record:[13,6,1,""],failed:[13,4,1,""],find:[13,3,1,""],find_one:[13,3,1,""],pending:[13,4,1,""],ready:[13,4,1,""],save:[13,4,1,""],set_collection:[13,3,1,""],split_groups:[13,4,1,""],unset:[13,3,1,""],update:[13,4,1,""]},"bamboo.models.calculation":{Calculation:[13,2,1,""]},"bamboo.models.calculation.Calculation":{"delete":[13,4,1,""],add_dependencies:[13,4,1,""],find:[13,3,1,""],save:[13,4,1,""]},"bamboo.models.dataset":{Dataset:[13,2,1,""]},"bamboo.models.dataset.Dataset":{"delete":[13,4,1,""],add_joined_dataset:[13,4,1,""],add_merged_dataset:[13,4,1,""],add_observations:[13,4,1,""],build_schema:[13,4,1,""],calculations:[13,4,1,""],clear_summary_stats:[13,4,1,""],count:[13,4,1,""],delete_columns:[13,4,1,""],delete_observation:[13,4,1,""],dframe:[13,4,1,""],find:[13,3,1,""],find_one:[13,3,1,""],has_pending_updates:[13,4,1,""],info:[13,4,1,""],join:[13,4,1,""],observations:[13,4,1,""],reload:[13,4,1,""],remove_parent_observations:[13,4,1,""],replace_observations:[13,4,1,""],resample:[13,4,1,""],rolling:[13,4,1,""],save:[13,4,1,""],save_observations:[13,4,1,""],set_olap_type:[13,4,1,""],set_schema:[13,4,1,""],summarize:[13,4,1,""],update:[13,4,1,""],update_complete:[13,4,1,""],update_stats:[13,4,1,""]},"bamboo.models.observation":{Observation:[13,2,1,""]},"bamboo.models.observation.Observation":{"delete":[13,3,1,""],append:[13,3,1,""],batch_read_dframe_from_cursor:[13,3,1,""],delete_all:[13,3,1,""],delete_columns:[13,3,1,""],find:[13,3,1,""],find_one:[13,3,1,""],save:[13,3,1,""],update:[13,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","classmethod","Python class method"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:classmethod","4":"py:method","5":"py:exception","6":"py:attribute"},terms:{"10cedc551e40418caa72495d771703b3":2,"10gen":10,"20descript":0,"20eat":0,"2de98":12,"30th":2,"643eaccb31e74216bfa7c16bfb0e79e5":2,"8a3d7":12,"8a3d74711475d8a51c84484fe73f24bd151242ea":[0,2,12],"9ae0ee32b78d445588742ac818c3d533":2,"9th":14,"__calculation_data":8,"__collection__":13,"__propagate_column":8,"__update_aggregate_dataset":8,"__update_is_valid":8,"__update_joined_dataset":8,"_dict":11,"_gps_altitud":[2,10],"_gps_latitud":2,"_gps_longitud":2,"_gps_precis":2,"_id":[0,13],"_is_invalid_for_mongo":11,"_merge_":12,"_parser__build_bnf":8,"_percentage_complet":[0,2,12],"_pvalu":1,"_resluggable_column":11,"_slugify_column":11,"_type":8,"_xform_id_str":[2,12],"abstract":8,"boolean":[0,2,4,8],"case":0,"default":[0,2,3,4,5,8,10,13],"final":[0,13],"float":[0,2,11,13],"function":[0,2,3,8,11,13],"import":10,"new":[5,6,8,10,11,12,13],"null":[0,2],"public":0,"return":[0,1],"switch":3,"true":[0,1,2,8,11,12,13],"try":11,"while":[8,11],a_dataset:8,abov:[12,15],abstact:13,abstract_model:[4,13],abstractcontrol:4,abstractmodel:[4,10],accept:[0,11,14],accommod:0,accord:0,action:8,add:[6,8,12,13],add_depend:13,add_joined_dataset:13,add_merged_dataset:13,add_observ:13,add_parent_column:8,addition:[8,13],addop:8,after:[0,1,12,13,14],against:8,agg:8,aggregation_nam:8,aggrgat:4,algebra:10,alias:8,all:[0,2,3,4,6,8,11,13],allow:11,alphanumer:11,alreadi:8,also:[0,2,3,10,12,13],altern:[0,2],amount:[0,1,2,3,8,10,12,14],amount_less_than_10:2,analog:3,analysi:10,andop:8,ani:[0,1,2,8,11,13],anoth:[2,3],app:4,append:13,appli:8,applic:10,appropri:8,apt:[6,10],arch:[6,10],area:14,arg:11,argmaxaggreg:[4,8],argument:[0,1,2,3,8,11,13],argumenterror:[11,13],arithmat:4,arrai:[2,8],as_cursor:13,as_dict:13,ascend:0,associ:8,associatd:8,asychron:8,async:10,asynchron:11,asyncron:10,atom:8,attempt:8,attribut:[0,8,13],averag:10,average_ag:3,back:0,background:[8,12,13],backu:8,bad:8,baklava:2,bamboo:0,bamboofram:4,bar:14,base64:11,base:[0,3,4,6,8,10,11,13,15],batch:13,batch_read_dframe_from_cursor:13,becaus:[0,8],been:[0,5,12],begin:12,below:[0,1,3],between:[8,12],binari:8,bla:10,bnf:8,bold:0,both:[8,12],boxcar:0,bsd:10,bson:11,build_schema:13,builder:10,built:8,cach:[8,13],caffein:2,calculate_column:8,calculatetask:4,call:[2,8,11,13,15],call_async:11,calulc:2,can:[0,1,2,3,8,10,11,12,13],cannot:[0,8,11],canon:12,cardin:[0,2,10],celeri:[4,15],celeryconfig:15,cento:10,chang:12,charact:[0,2,11],chart:14,child:8,child_dataset:8,choos:14,classmethod:[5,8,11,13],claus:10,clean_record:13,clear:13,clear_summary_stat:13,click:14,client:[5,10],code:0,coeffici:[1,8],coffe:2,col:8,collect:[5,13],collection_nam:13,colum:11,column:[0,1],column_funct:8,column_nam:11,columntypeerror:8,combin:[2,11],combine_dict:11,comma:8,comment:[0,2],common:2,commun:13,complet:13,compop:8,comput:[0,13],condit:8,configur:10,conj:8,consider:2,constant:8,contain:[0,1,2,5],content:[12,13],continu:12,convers:11,convert:[0,3,11,13],copsi:2,correctli:[0,2],correl:[1,8],cost:10,cotsi:2,could:[12,13],count:0,countaggreg:[4,8],countdown:13,create_db:5,created_at:[0,2],creation:0,criteria:8,critic:10,csv:0,csv_file:[0,2],curl:[0,2,12,15],current:[8,11,13,15],cursor:13,custom:2,daemon:10,dai:0,daili:0,dataet:8,datafram:[1,4,8,11,13],dataset_id:[8,12,13],datastructur:11,date:0,date_column:[0,10,13],datetim:[0,2,11,13],datetool:11,db_name:5,debian:[6,10],decemb:14,decod:[11,13],defin:[0,1,11],definit:[0,8],delect:[2,8,12],delet:0,delete_al:13,delete_column:13,delete_observ:13,delimit:13,demonstr:10,deni:8,denomin:[1,8],depend:8,dependencyerror:[4,13],dependent_column:13,deploi:6,descend:[0,8],descript:[0,2],desert:[0,2],detail:2,determin:2,dev:10,deviat:[1,8,13],dex:13,df_mongo_decod:11,df_to_json:11,df_to_jsondict:11,dframe:[8,11,13],dframe_from_upd:8,diagram:6,dict:[11,13],dict_for_mongo:11,dictionari:[0,11,12,13],differ:2,dimens:[0,2,11,13],dimension:[0,8,13,14],dinner:2,directori:15,disallow:[12,15],disj:8,distinct:0,distinguish:8,district:10,divid:1,divis:8,doc:[0,2,6],doe:[11,12,13],dropna:10,drunk_food:2,dtype:8,dump:11,dump_mongo_json:11,dynam:[3,10],each:[11,13],eat:0,either:[2,8,12],empti:[2,8],encod:[11,13],end:[12,14],endpoint:[0,12],enough:0,ensur:[6,8,11,13],entri:[8,15],epic_eat:2,epoch:2,equal:[2,8,11],equat:8,equival:[1,13],error:[0,2,8,11,12,13],escap:[0,2],eval:8,evalandop:[4,8],evalbinaryarithop:[4,8],evalbinarybooleanop:[4,8],evalcaseop:[4,8],evalcomparisonop:[4,8],evalconst:[4,8],evald:[4,8],evalexpop:[4,8],evalfunct:[4,8],evalinop:[4,8],evalmapop:[4,8],evalmultop:[4,8],evalnotop:[4,8],evalorop:[4,8],evalpercentil:[4,8],evalplusop:[4,8],evalsignop:[4,8],evalstr:[4,8],evalterm:[4,8],evaltodai:[4,8],evalu:8,exampl:[0,1,2,8],except:[8,11],exclud:[8,13],execut:[8,12],exist:[2,6,8,11,12,13],expect:1,exponenti:8,expop:8,expr:8,express:8,extend:2,extens:0,extract:8,factor:[8,15],fail:[12,13],fals:[0,2,8,10,11,13],featur:6,fedora:10,female_stud:3,fetch:13,field:[0,13],fieldnam:0,file:0,filesystem:2,filter_schema:11,find:[8,13],find_on:13,finish:13,first:[0,2,8,11,12,13],flat:13,flatten:13,follow:[0,2,8,12],food:[0,2],food_photo:[0,2],food_typ:[0,2,8,12,14],forc:13,foreground:10,fork:6,form:[0,2,8,10,12,15],formhub:[0,2,10,12,15],formula:0,formula_nam:8,fortran:10,found:[8,11],fourth:0,fulfil:8,func:8,function_nam:8,gcc:10,gener:8,get:[6,8,10],get_json_valu:11,gfortran:10,github:6,given:[1,2,8,12,13],global:10,good:[0,3],good_eat:[0,2,10,12,15],goodeat:0,gps_alt:[0,2,8,12],gps_latitud:0,gps_longitud:0,gps_precis:[0,8],graphviz:6,gross_revenu:3,group_str:13,hand:[8,12],handlebamboodataset:0,has_pending_upd:13,have:[0,1,2,12,13],hemispher:0,here:[0,10,12],hold:13,home:[0,2,15],host:10,how:[0,13],howev:[0,8],html:6,http:[0,2,10,12,14,15],identfi:13,identifi:13,ignor:[1,8],illeg:11,imei:2,implement:8,import_from_url:10,importabledataset:4,imposs:2,includ:[0,1,2,3,8,11,13],include_agg:13,include_delet:13,indentifi:0,index:[0,1,2,8,10],indic:0,info:[0,2,13],inherit:[4,8],initi:13,input:8,instal:6,instanc:13,integ:[0,2,8,11,13],interfac:[10,13],intern:[1,8,13],interpret:[2,11],interv:[0,13],invalid:[8,11,13],is_factor:8,is_float_nan:11,javascript:0,join:[8,10],join_dataset:8,jpg:2,json_fil:[0,2],jsonerror:[11,13],jsontool:11,keep:8,keep_mongo_kei:[11,13],keep_parent_id:[8,13],kei:[0,2,11,12,13],kenyan:10,key_for_mongo:11,keyerror:8,keyword:11,known:10,kwarg:11,label:[0,2,10,11],labels_to_slug:11,languag:[3,8,10],lapack:10,later:11,latest:10,lead:8,left:[8,12],length:3,less:[2,8,14],liabil:3,lib:[4,10],libat:2,libatla:10,licens:[0,10],like:[0,12],limit:[0,2,13],line:[0,2],linux:[6,10],list:[0,1],load:8,local:[0,2],localhost:15,location_nam:[0,2],location_photo:2,logic:8,low_risk:[1,2,3,8,12],lunch:[2,12],mac:10,made:12,mai:[0,1,2,8,10],make:[0,6,8,10,11,12,15],make_uniqu:11,male_stud:3,manag:10,manipul:10,map:[2,8],mappnig:11,match:[0,2,12,13],matplotlib:10,maxaggreg:[4,8],maximum:[1,8],mberg:[0,2,10,12,15],meal:10,mean:0,meanaggreg:[4,8],measur:[0,2,11,13],medianaggreg:[4,8],medium_risk:[1,3],merge_dataset_id:8,mergeerror:8,messag:[12,13],meta:13,might:10,minaggreg:[4,8],minimum:8,miss:1,mlberg:0,moder:3,modifi:[0,10,11],modilab:[0,2],modul:[10,15],moment:0,mongo:[2,10],mongo_id:11,mongodb:[0,2,5,10,11,13,15],month:[3,10],monthli:[0,10],monthly_amount:10,more:12,morning_food:[2,8],mothly_amount:10,move:0,multi:0,multicolumnaggreg:4,multop:8,must:[0,2,11,12,13],na_valu:[2,10],name:[0,1,2,3,5,8,11,12,13,15],nan:[2,11,12],nat:2,naur:8,need:[0,2],neg:8,net_revenu:3,new_data:[8,13],new_dataset:13,new_dfram:8,newestaggreg:[4,8],no_cach:[8,13],non:[8,11,12,13],none:[5,8,11,13],nonuniquejoinerror:4,northern:0,nose:6,notat:0,note:10,notic:10,notop:8,num:11,num_column:[0,2],num_row:[0,2],num_stud:1,num_teach:1,number:[0,1,2,8,10,13,15],number_of_guest:1,numer:[0,1,8,13],oberv:13,obj:11,object:11,observ:[4,8,10],occur:[1,11,12],octob:2,off:10,olap_typ:[0,2,11,13],onc:[0,11],onli:0,only_agg:13,open:10,operand:[4,8],operator_nam:8,operator_operand:8,option:[0,8,11,12,13],order_bi:0,org:[0,2,10,12,15],origin:[0,1,11,12,13],orop:8,osx:10,oth:8,other:[2,3,8,10,12,13],other_dataset_id:12,otherwis:[8,11,12,13],output:0,over:[2,10,13],overal:13,overlap:12,overwrit:[11,13],overwritten:2,packag:10,pacman:[6,10],pad:13,page:10,pair:[8,12],panda:[0,2,4],param:13,parent:[8,13],parent_dataset:8,parent_dataset_id:8,parent_id:[8,13],parse_timestamp_queri:11,parsed_expr:8,parseerror:13,parser:2,pass:[0,1,2,3,6,8,11,12,13],pearsonaggreg:[4,8],pend:13,pep8:6,per:[2,10],percentil:[3,8,13],perform:[0,3,8,12],period:3,perist:13,perman:0,pip:[6,10],pkg:10,place:15,plot:10,plot_typ:14,plu:12,point:[12,14],poor:3,port:15,possibl:[2,8],post:[0,2,8,12,15],potenti:11,power:9,prefix:11,proce:8,process:[0,10,13],produc:[8,11],profil:6,program:3,propag:[8,12],properli:0,provid:[5,8,10],provinc:10,pud:2,pull:[6,8],purpos:10,put:[0,10,12],pybamboo:10,pypars:10,query_arg:13,queryarg:13,queue:13,race:8,radiu:3,rais:[8,11,13],random:13,rate:0,ratioaggreg:[4,8],read:[10,13],reader:[4,10],readi:[0,2,12,13],real:8,realtim:10,reat:13,rebuild:[8,11],recalcul:8,receiv:10,recognize_d:11,record:[2,13],recur:8,recurs:11,redhat:10,reduc:8,refer:8,refresh:13,rel:1,releas:10,reload:13,reload_:13,remov:[8,11,12,13],remove_mongo_reserved_kei:11,remove_parent_observ:13,remove_reserved_kei:8,rename_map_for_dfram:11,replac:[8,11],replace_kei:11,replace_observ:13,repres:[0,13],request:[0,2,6,12,15],requir:[0,2,6,12],reserv:[8,11,13],reserve_encod:11,reserved_nam:11,reserved_word:8,reset:12,reslug:11,restrict:[0,2,8,13,14],retain:13,retriev:0,rewrit:11,rice:2,right:[0,8,12],risk_factor:[0,1,2,3,8,12],rolling_window:[0,13],row:[0,1,2,8,11],rows_for_parent_id:8,run:[6,8,10],run_serv:15,safe_init:11,same:[0,2,8,12],sampl:[0,8],save:[0,8,13],save_observ:13,scalar:3,scema:0,schema_build:11,schema_from_dfram:11,school:10,script:[6,15],sdf:0,search:10,second:[0,2,3,8,13],see:[0,2,13],seen:0,select:0,semant:0,seper:8,seri:11,serial:10,series_to_jsondict:11,set_async:10,set_collect:13,set_index:10,set_num_column:13,set_olap_typ:[0,11,13],set_schema:13,settabl:11,should:[8,11,12],show:[2,12],shown:2,sic:[0,2],side:[8,12],sign:[0,8],signifi:8,similarli:0,simpl:[0,10,11,13],simpletyp:[0,2],singl:[0,4,12],size:13,slug:[2,11,13],slugifi:11,softwar:10,some:[0,2],sort:0,sourc:[5,8,10,11,13],spec:13,special:[0,2],special_nam:8,specifi:[0,2,12,13],spell:[0,2],spent:10,split:13,split_group:13,staff:10,stamp:2,standard:[1,8,13,15],standarddeviationaggreg:[4,8],start:[8,13,15],stat:13,state:[0,2,13],state_fail:13,state_pend:13,state_readi:13,statu:12,step:8,stop:15,storag:11,store:[0,1],store_aggreg:8,streat_sweet:[0,2,12],street_meat:2,string:[0,2,8,11,13],student:[1,10],student_teacher_ratio:3,submit:6,submit_d:[0,1,2,3,8,10,14],submit_data:2,subsequ:12,subtract:8,succe:12,success:[0,2,12],suffix:1,suggest:0,sum:0,sum_of_amount:2,sumaggreg:[4,8],summar:[8,13,15],summari:0,summariz:8,summarize_df:8,summarize_seri:8,summarize_with_group:8,suppli:[12,13],support:[0,10],suppos:[0,11,12],sure:[10,12],sweet:0,systemat:10,take:[0,2,4,8,11,12],task:[4,8,13],teach:10,teacher:[1,10],tempor:14,term:8,text:0,than:[2,8,14],thei:4,them:[8,13],themselv:[1,3],therefor:8,thi:[0,1,2,8,11,12,13,15],third:0,those:[0,4],three:8,through:10,time:[2,3,8,10,13],todai:3,token:8,tokenlist:8,tolga:2,tool:10,top:13,total_stud:3,total_teach:3,total_teaching_staff:14,tran:8,treat:0,tupl:8,turkish:2,turn:10,twice:0,two:[1,2,4,8,12],ubuntu:10,under:[0,10,13],underscor:11,ungroup:1,uniqu:[2,8,11,12,13,15],uniquecalculationerror:4,unix:2,unless:8,unprefix:11,unset:13,unset_queri:13,update_complet:13,update_id:13,update_stat:13,updated_at:[0,2],updated_dfram:8,upload:0,upon:15,url:0,user:15,uuid:13,valid:[1,2,3,8,13],validate_formula:8,valu:[0,1,2,8,11,12,13],value_for_mongo:11,variabl:8,varianc:[1,8],varianceaggreg:[4,8],vector:[1,3],view:14,virtualenv:15,virtualenvwrapp:15,want:0,water_functioning_count:2,web:10,weekli:0,well:2,what:10,when:[2,8,12,13],where:[1,8,12],whether:8,which:[0,1,2,3,8,10,12,13],whose:[11,13],win_typ:[0,13],window:[0,10,13],wise:[8,12],without:[8,10],word:8,work:6,worker:15,would:[0,8,12],wrap:0,written:[0,8],www:15,you:[0,2,3,12],your:[0,2,6,10],yyyi:2,zero:1},titles:["Advanced Commands","Aggregations","Basic Commands","Calculations","Class Structure","Config","Contributing Code","Controllers","Core","Examples","Welcome to the <em>bamboo</em> documentation!","Lib","Manipulating Data","Models","Plotting","Server Setup"],titleterms:{"case":3,"class":4,"export":0,"return":2,"var":1,about:2,abstractcontrol:7,abstractmodel:13,across:0,addit:0,advanc:0,aggreg:[1,2,4,8],api:10,argmax:1,arithmet:3,async:11,bamboo:[2,10],basic:2,build:6,builder:11,calcul:[0,2,3,7,8,13],callback:0,check:2,code:[6,10],column:[2,12],command:[0,2],comparison:3,config:5,configur:15,connect:10,contribut:[6,10],control:[4,7],core:[4,8],cost:14,count:[1,2],creat:0,csv:2,daemon:15,data:[0,2,12],databas:5,dataset:[0,2,7,12,13],date:[2,3,11],delet:[2,12],denominator_formula:1,depend:10,differ:12,distinct:2,document:[6,10],edit:12,egyptian:9,elect:9,exampl:[9,10,15],file:2,foodtyp:2,foreground:15,format:0,formula1:1,formula2:1,formula:[1,2,3,8,10],frame:[4,8],from:[0,2],global:15,group:[0,2,14],index:12,index_formula:1,indic:10,inform:2,instal:10,interact:9,javascript:10,join:12,json:[0,2,11],jsonp:0,kenyan:14,lib:11,librari:10,link:2,list:2,local:15,manipul:12,map:[9,12],max:1,meal:14,mean:1,median:1,membership:3,merg:[8,12],metadata:0,min:1,miss:2,model:[4,13],modifi:12,mongo:11,multi:2,multipl:[0,12],newest:1,newli:2,note:15,numerator_formula:1,numpi:10,observ:13,olap:0,onli:2,oper:[0,4,8],order:0,over:14,panda:10,paramet:0,pars:8,parser:8,pearson:1,perish:0,plot:14,preced:3,proposit:3,provinc:14,python:10,queri:[0,2],rate:[2,14],ratio:1,reader:11,refer:10,replac:12,replic:0,resampl:0,rest:10,result:0,retriev:[2,12],roll:0,root:7,rout:5,row:12,run:15,schema:[0,11],school:14,scipi:10,select:2,server:[10,15],set:0,setup:[10,15],staff:14,statement:3,statist:[0,2,8],std:1,store:2,structur:[4,10],sum:1,summari:[2,8],tabl:10,teach:14,test:6,time:14,timeseri:0,tool:11,transform:3,type:0,updat:[0,12],upload:2,url:2,usag:[10,15],util:[8,11],value_formula:1,version:[2,7],via:0,welcom:10,your:[12,15]}})