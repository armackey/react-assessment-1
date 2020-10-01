import React, { ReactElement, useContext } from "react";
import { CustomerRewardList, IPurchase } from "../../shared/interfaces";
import { CustomerListContext } from "../../state/Context";
import { format } from 'date-fns';
import './CustomerPointReward.css';

export const CustomerPointReward = (props: IPurchase) => {
  const { state, dispatch } = useContext(CustomerListContext);
  const CPR = new CustomerPointRewardFactory(props, state, dispatch);
  const RenderedUI = CPR.render();

  return <>{ RenderedUI }</>;
}

class CustomerPointRewardFactory {
  constructor(
    private props: IPurchase, 
    private state: CustomerRewardList,
    private dispatch: Function
  ) { }
  
  readableDate(date: Date): string {
    return format(new Date(date), 'MM/dd/yyyy');
  }

  render(): ReactElement {
    const { price, points, date } = this.props;
    return (
      <div className="point-reward-container">
        <div className="date">
          date: { this.readableDate(date) }
        </div>        
        <div className="price">
          order price: { price }
        </div>
        <div className="points">
          points: { points }
        </div>
      </div>
    );
  }
}