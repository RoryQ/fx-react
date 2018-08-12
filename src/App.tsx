import * as React from 'react';
import './App.css';

import FxCalculator from './containers/FxCalculatorContainer';
import { Currency } from './types';
import { Dictionary } from 'ramda';
import { Dispatch } from 'redux';
import * as actions from './actions';
import { connect } from 'react-redux';

export interface AppActions {
  LoadFxRates: (currencies: Array<Currency>, rates: Dictionary<number>) => void;
}
class App extends React.Component<AppActions> {

  componentDidMount() {
    let currencies = [
      { code: 'GBP', name: 'Pound Sterling', flag: 'gb', symbol: "£" }, 
      { code: 'AUD', name: 'Australian Dollar', flag: 'au', symbol: "$"},
      { code: 'EUR', name: 'Euro', flag: 'eu', symbol: "€"}
    ];

    let rates = {
      'EUR': 1,
      'AUD': 1.5689,
      'GBP': 0.89050
    };

    this.props.LoadFxRates(currencies, rates);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Daily Exchange Rates</h1>
        </header>
        
        <FxCalculator />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LoadFxRatesAction>): AppActions{
  return {
    LoadFxRates: (currencies, rates) => dispatch(actions.LoadFxRates(currencies, rates))
  }
}

export default connect(null, mapDispatchToProps)(App)
