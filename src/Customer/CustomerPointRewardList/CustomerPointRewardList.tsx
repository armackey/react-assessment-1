import React, { ReactElement, useContext } from "react";
import { CustomerRewardList, IPurchase } from "../../shared/interfaces";
import { CustomerListContext } from "../../state/Context";
import { CustomerPointReward } from "../CustomerPointReward/CustomerPointReward";
import './CustomerPointRewardList.css';

export const CustomerPointRewardList = (props: { purchases: IPurchase[] }) => {
  const { state, dispatch } = useContext(CustomerListContext);
  const CPRL = new CustomerPointRewardListFactory(props, state, dispatch);
  const RenderedUI = CPRL.render();

  return <>{ RenderedUI }</>;
}

class CustomerPointRewardListFactory {
  constructor(
    private props: { purchases: IPurchase[] },
    private state: CustomerRewardList,
    private dispatch: Function
  ) { }

  render(): ReactElement {
    const { purchases } = this.props;
    const RewardItemCollection = purchases.map((item: IPurchase, index: number) => (
      <CustomerPointReward
        key={ index }
        price={ item.price } 
        date={ item.date } 
        points={ item.points } />
    ));

    return (
      <div className="entry">
        { RewardItemCollection }
      </div>
    )
  }
}