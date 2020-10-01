import './App.css';
import React, { useReducer } from 'react';
import { CustomerListContext } from './state/Context';
import { initialState, reducer } from './state/state.reducer';
import { CustomerComponent } from './Customer/Customer';
import { GeneratorButton } from './GeneratorButton/GeneratorButton';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <CustomerListContext.Provider value={{ state, dispatch }}>
      <GeneratorButton />
      <CustomerComponent />
    </CustomerListContext.Provider>
  );
}

export default App;
