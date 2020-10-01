import React, { ReactElement, useContext } from 'react';
import { CustomerRewardList, ICustomer } from '../shared/interfaces';
import { CustomerListContext } from '../state/Context';
import { CustomerPointRewardList } from './CustomerPointRewardList/CustomerPointRewardList';
import './Customer.css';

export const CustomerComponent = () => {
  const { state, dispatch } = useContext(CustomerListContext);
  const CF = new CustomerFactory(state, dispatch);
  const RenderedUI = CF.render();

  return <>{ RenderedUI }</>;
}

class CustomerFactory {
  constructor(
    private state: CustomerRewardList,
    private dispatch: Function
  ) { }

  render(): ReactElement {
    const CustomerCollection = this.state.customers
      .map((customer: ICustomer, index: number) => (
        <div className="customer-container" key={ index }>
          <div className="name">
            { customer.name }
          </div>
          <CustomerPointRewardList purchases={ customer.purchases } />
        </div>
    ));
    return <>{ CustomerCollection }</>;
  }
}