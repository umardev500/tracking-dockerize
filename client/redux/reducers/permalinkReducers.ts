const initialPermalink = {
  status: false
};

export const permalinkReducer = (state: any = initialPermalink, action: any) => {
  switch (action.type) {
    case 'SET_ADD_STATE':
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
