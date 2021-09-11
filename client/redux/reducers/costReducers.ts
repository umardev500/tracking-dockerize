import { CourierModel } from '../../models/courier';

export interface CostState {
  provinceOrigin: {
    name: string | null;
    id: string | null;
  };
  cityOrigin: {
    name: string | null;
    id: string | null;
  };
  subDistrictOrigin: {
    name: string | null;
    id: string | null;
  };
  provinceDest: {
    name: string | null;
    id: string | null;
  };
  cityDest: {
    name: string | null;
    id: string | null;
  };
  subDistrictDest: {
    name: string | null;
    id: string | null;
  };
  weight: string | null;
}

const initialConstInfo = {
  provinceOrigin: {
    name: null,
    id: null
  },
  cityOrigin: {
    name: null,
    id: null
  },
  subDistrictOrigin: {
    name: null,
    id: null
  },
  provinceDest: {
    name: null,
    id: null
  },
  cityDest: {
    name: null,
    id: null
  },
  subDistrictDest: {
    name: null,
    id: null
  },
  weight: null
};

export type CostAction = { type: string; payload: CostState };

export const costInfo = (state: CostState = initialConstInfo, action: CostAction): CostState => {
  switch (action.type) {
    case 'SET_PROV':
      console.log('set province');
      return { ...state, ...action.payload };
    case 'SET_CITY':
      return { ...state, ...action.payload };
    case 'SET_SUBDISTRICT':
      return { ...state, ...action.payload };
    case 'SET_PROV_DEST':
      return { ...state, ...action.payload };
    case 'SET_CITY_DEST':
      return { ...state, ...action.payload };
    case 'SET_SUBDISTRICT_DEST':
      return { ...state, ...action.payload };
    case 'SET_WEIGHT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// =>> Province reducer
const provinceInitial = {
  provinces: [],
  cities: [],
  subDistrict: [],
  citiesDest: [],
  subDistrictDest: []
};

export const provinceReducer = (state: any = provinceInitial, action: any): any => {
  switch (action.type) {
    case 'SET_PROV_DATA':
      return { ...state, provinces: [...action.payload] };
    case 'SET_CITY_DATA':
      return { ...state, cities: [...action.payload] };
    case 'SET_SUBDISTRICT_DATA':
      return { ...state, subDistrict: [...action.payload] };
    case 'SET_CITY_DATA_DEST':
      return { ...state, citiesDest: [...action.payload] };
    case 'SET_SUBDISTRICT_DATA_DEST':
      return { ...state, subDistrictDest: [...action.payload] };
    default:
      return state;
  }
};

// => courier
const initialCourierCost: CourierModel = {
  name: 'POS Indonesia',
  value: 'pos',
  logo: '/logos/pos.svg'
};

export const courierCostReducer = (state: CourierModel = initialCourierCost, action: any): any => {
  switch (action.type) {
    case 'CHANGE_COURIER_COST':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// => cost result
const initialCostResult = {
  costResult: null
};

export const costResultReducer = (state: any = initialCostResult, action: any): any => {
  switch (action.type) {
    case 'SET_COST_RESULT':
      return { ...state, costResult: { ...action.payload } };
    default:
      return state;
  }
};
