import React, { ReactElement, useContext } from "react";
import { Customer } from "../shared/data-set-generator";
import { CustomerRewardList } from "../shared/interfaces";
import { CustomerListContext } from "../state/Context";
import { AddDataSet } from "../state/state.action";

export const GeneratorButton = () => {
  const { state, dispatch } = useContext(CustomerListContext);
  const GBF = new GeneratorButtonFactory(state, dispatch);
  const RenderedUI = GBF.render();

  return <>{ RenderedUI }</>;
}

class GeneratorButtonFactory {
  constructor(
    private state: CustomerRewardList,
    private dispatch: Function
  ) { }

  render(): ReactElement {
    return <button onClick={ () => this.clicked() }>click me</button>;
  }

  clicked(): void {
    const DataGenerated = new Customer();
    this.dispatch(new AddDataSet(DataGenerated));
  }
}