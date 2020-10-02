

export interface IPurchase {
  price: number;
  date: Date;
  points: number;
}
export interface IMonth {
  id: number | null;
  totalPoints: number;
  purchases: IPurchase[];
}

export interface ICustomer {
  name: string;  
  months: IMonth[];
  totalPoints: number;
}

export interface CustomerRewardList {
  customers: ICustomer[]
}
