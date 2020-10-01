import { createContext } from 'react';
import { CustomerRewardList } from '../shared/interfaces';
import { initialState } from './state.reducer';

interface ContextValue {
  state: CustomerRewardList,
  dispatch: any
}

export const CustomerListContext = createContext<ContextValue>({
  state: initialState,
  dispatch: {}
});