import { CourierModel } from '../../models/courier';

const initialSate: CourierModel = {
  name: 'POS Indonesia',
  value: 'pos',
  logo: '/tracking/logos/pos.svg'
};

export type Action = { type: 'CHANGE_COURIER'; payload: CourierModel };

export const waybillCourierSelectedReducer = (state: CourierModel = initialSate, action: Action): CourierModel => {
  switch (action.type) {
    case 'CHANGE_COURIER':
      return { ...action.payload };
    default:
      return state;
  }
};

// =>> Waybill info
export type WaybillActionInfo = { type: 'SET_WAYBILL_INFO'; payload: any };

export type WaybillInfoState = {
  waybillinfo: any;
};

const initialWaybillInfo: WaybillInfoState = {
  waybillinfo: null
};

export const waybillInfoReducer = (state: WaybillInfoState = initialWaybillInfo, action: WaybillActionInfo): any => {
  switch (action.type) {
    case 'SET_WAYBILL_INFO':
      return { waybillinfo: { ...action.payload } };
    default:
      return state;
  }
};
