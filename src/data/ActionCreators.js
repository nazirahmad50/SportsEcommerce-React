import { ActionTypes } from "./Types";
// import { data as phData } from "./placeholder";
import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.getData(dataType, params).then((res) => ({
    dataType,
    data: res.data,
    total: Number(res.headers["x-total-count"]),
    params,
  })),
});

export const setPageSize = (newSize) => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize,
});

export const setSortProperty = (newprop) => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newprop,
});
