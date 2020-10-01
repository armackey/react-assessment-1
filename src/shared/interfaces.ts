

export interface IPurchase {
  price: number;
  date: Date;
  points: number;
}

export interface ICustomer {
  name: string;
  purchases: IPurchase[];
}

export interface CustomerRewardList {
  customers: ICustomer[]
}
