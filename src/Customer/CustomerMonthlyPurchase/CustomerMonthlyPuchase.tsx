import React from 'react';
import { IMonth } from '../../shared/interfaces';
import { CustomerPointRewardList } from '../CustomerPointRewardList/CustomerPointRewardList';
import './CustomerMonthlyPurchase.css';
export const CustomerMonthlyPurchase = (props: { months: IMonth[] }) => {
  const CMPF = new CustomerMonthlyPurchaseFactory(props);
  const RenderedUI = CMPF.render();

  return <>{ RenderedUI }</>;
}

class CustomerMonthlyPurchaseFactory {
  constructor(private props: { months: IMonth[] }) { }

  render() {
    const { months } = this.props;
    const Collection = months.map((m, index: number) => (
      <div className="" key={ index }>
        <CustomerPointRewardList
          purchases={ m.purchases }
        />
        <div className='monthly-total'>monthly total { m.totalPoints }</div>
      </div>
    ));
    return <>{ Collection }</>
  }
}