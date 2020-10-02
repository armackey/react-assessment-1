import React, { ReactElement, useContext } from 'react';
import { CustomerRewardList, ICustomer } from '../shared/interfaces';
import { CustomerListContext } from '../state/Context';
import './Customer.css';
import { CustomerMonthlyPurchase } from './CustomerMonthlyPurchase/CustomerMonthlyPuchase';

export const CustomerComponent = () => {
  const { state } = useContext(CustomerListContext);
  const CF = new CustomerFactory(state);
  const RenderedUI = CF.render();

  return <>{ RenderedUI }</>;
}

class CustomerFactory {
  constructor(
    private state: CustomerRewardList
  ) { }

  render(): ReactElement {
    const CustomerCollection = this.state.customers
      .map((customer: ICustomer, index: number) => (
        <div className="customer-container" key={ index }>
          <div className="name">
            { customer.name }
          </div>
          <CustomerMonthlyPurchase months={ customer.months } />
          <div className="total">
           total: { customer.totalPoints }
          </div>
        </div>
    ));
    return <>{ CustomerCollection }</>;
  }
}