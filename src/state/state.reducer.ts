import { CustomerRewardList } from "../shared/interfaces";
import { Actions, ActionTypes } from "./state.action";

export const initialState: CustomerRewardList = {
  customers: []
}

export function reducer(state = initialState, action: Actions): CustomerRewardList {
  switch(action.type) {
    case ActionTypes.SelectedAddDataSet: {
      return { customers: [ ...state.customers, action.payload ] };
    }
    default: {
      return { ...state };
    }
  }
}