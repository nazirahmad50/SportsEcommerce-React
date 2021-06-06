import { ActionTypes } from "./Types";
// import { data as phData } from "./placeholder";
import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource
    .getData(dataType)
    .then((res) => ({ dataType, data: res.data })),
});
