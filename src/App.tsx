import * as React from 'react';
import './App.css';

import FxCalculator from './containers/FxCalculatorContainer';

class App extends React.Component {
  public render() {

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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Daily Exchange Rates</h1>
        </header>
        
        <FxCalculator currencies={currencies} rates={rates} base='EUR' />
      </div>
    );
  }
}

export default App;
