import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import { converter } from './reducers';
import { Provider } from 'react-redux';
import {RootState} from './types';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    let newstate: RootState = {
      ...state,
    }

    newstate.calc.fromState.amount = undefined;
    if (!newstate.calc.fromState.rememberSelection) {
      newstate.calc.fromState.code = undefined;
      newstate.calc.fromState.rememberSelection = false;
    }
    
    newstate.calc.toState.amount = undefined;
    if (!newstate.calc.toState.rememberSelection) {
      newstate.calc.toState.code = undefined;
      newstate.calc.toState.rememberSelection = false;
    }

    const serializedState = JSON.stringify(newstate);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // die
  }
};

let savedState = loadState();
const store = createStore(converter, savedState, undefined);
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
