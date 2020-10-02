import React, { ReactElement } from "react";
import { IPurchase } from "../../shared/interfaces";
import { CustomerPointReward } from "../CustomerPointReward/CustomerPointReward";
import './CustomerPointRewardList.css';

export const CustomerPointRewardList = (props: { purchases: IPurchase[] }) => {
  const CPRL = new CustomerPointRewardListFactory(props);
  const RenderedUI = CPRL.render();

  return <>{ RenderedUI }</>;
}

class CustomerPointRewardListFactory {
  constructor(
    private props: { purchases: IPurchase[] }
  ) { }

  render(): ReactElement {
    const { purchases } = this.props;
    const RewardItemCollection = purchases.map((item: IPurchase, index: number) => (
      <div className="monthly-purchase" key={ index }>
        <CustomerPointReward
          price={ item.price }
          date={ item.date }
          points={ item.points } />
      </div>
    ));
    
    return (
      <div className="entry">
        { RewardItemCollection }
      </div>
    )
  }
}