import './App.css';
import { connect } from 'react-redux';
import { Currency } from './types';
import { Dictionary } from 'ramda';
import { Dispatch } from 'redux';
import { parseString } from 'xml2js';
import { symbols, countryByCurrency } from './constants';
import * as actions from './actions';
import * as cc from 'currency-codes';
import * as React from 'react';
import axios from 'axios';
import FxCalculator from './containers/FxCalculatorContainer';

export interface AppActions {
  LoadFxRates: (currencies: Array<Currency>, rates: Dictionary<number>) => void;
}

function dailyRatesXmlToRates(xmlString: string): [Dictionary<number>, Array<Currency>]{
  const currencies: Currency[] = new Array<Currency>();
  const rates = { 'EUR': 1 };
  currencies.push({ 
    name: cc.code('EUR').currency,
    code: 'EUR',
    symbol: symbols['EUR'],
    flag: 'eu'
  });

  parseString(xmlString, function XmlToRates(err, result) {
    const xmlRates = result['gesmes:Envelope']['Cube'][0]['Cube'][0]['Cube'];
    // date = result['gesmes:Envelope'].Cube[0].Cube[0]['$'].time;

    for (let rate of xmlRates) {
      let ccode = rate['$']['currency'];
      rates[ccode] =+ rate['$']['rate'];
      currencies.push({
        name: cc.code(ccode).currency,
        code: ccode,
        symbol: symbols[ccode],
        flag: countryByCurrency(ccode)
      });
    }
  });
  return [rates, currencies];
}
class App extends React.Component<AppActions> {

  componentDidMount() {
    axios.get('https://s3-ap-southeast-2.amazonaws.com/aws-ecb-rates-mirror/eurofxref-daily.xml')
      .then(x => {
        let [rates, currencies] = dailyRatesXmlToRates(x.data);
        this.props.LoadFxRates(currencies, rates);
      })
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

export function mapDispatchToProps(dispatch: Dispatch<actions.LoadFxRatesAction>): AppActions {
  return {
    LoadFxRates: (currencies, rates) => dispatch(actions.LoadFxRates(currencies, rates))
  }
}

export default connect(null, mapDispatchToProps)(App)
