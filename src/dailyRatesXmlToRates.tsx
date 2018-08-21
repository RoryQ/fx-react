import { Currency } from './types';
import { Dictionary } from 'ramda';
import { parseString } from 'xml2js';
import { symbols, countryByCurrency } from './constants';
import * as cc from 'currency-codes';


export function dailyRatesXmlToRates(xmlString: string): [Dictionary<number>, Array<Currency>, string] {
  const currencies: Currency[] = new Array<Currency>();
  const rates = { 'EUR': 1 };
  let date = "";

  currencies.push({
    name: cc.code('EUR').currency,
    code: 'EUR',
    symbol: symbols['EUR'],
    flag: 'eu'
  });
  
  parseString(xmlString, function XmlToRates(err, result) {
    const xmlRates = result['gesmes:Envelope']['Cube'][0]['Cube'][0]['Cube'];
    date = result['gesmes:Envelope'].Cube[0].Cube[0]['$'].time;
    for (let rate of xmlRates) {
      let ccode = rate['$']['currency'];
      rates[ccode] = +rate['$']['rate'];
      currencies.push({
        name: cc.code(ccode).currency,
        code: ccode,
        symbol: symbols[ccode],
        flag: countryByCurrency(ccode)
      });
    }
  });
  
  return [rates, currencies, date];
}