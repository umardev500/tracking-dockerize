import { combineReducers } from 'redux';
import { CourierModel } from '../../models/courier';
import { costInfo, costResultReducer, CostState, courierCostReducer, provinceReducer } from './costReducers';
import { permalinkReducer } from './permalinkReducers';
import { waybillCourierSelectedReducer, waybillInfoReducer, WaybillInfoState } from './waybillReducers';

export type AppState = {
  courier: CourierModel;
  courierCost: CourierModel;
  waybillinfo: WaybillInfoState;
  costinfo: CostState;
  provinces: any;
  costResult: any;
  permalink: any;
};

export default combineReducers<AppState>({
  courier: waybillCourierSelectedReducer,
  courierCost: courierCostReducer,
  waybillinfo: waybillInfoReducer,
  costinfo: costInfo,
  provinces: provinceReducer,
  costResult: costResultReducer,
  permalink: permalinkReducer
});
