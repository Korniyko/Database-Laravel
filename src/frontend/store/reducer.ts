import { Reducer } from "redux";






export const products: Reducer<any> = (state, action): any => {
  if (!state) {
    return {}
  }

  switch (action.type) {

    case '':
      return {}



    default:
      return state;
  };
}



