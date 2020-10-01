import { ICustomer } from "../shared/interfaces";

export enum ActionTypes {
  SelectedAddDataSet = '[Customer] Add Data Set'
}

export class Action {
  constructor(public type: string) { }
}

export class AddDataSet implements Action {
  readonly type = ActionTypes.SelectedAddDataSet;
  constructor(public payload: ICustomer) { }
}

export type Actions = AddDataSet;