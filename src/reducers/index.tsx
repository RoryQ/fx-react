import {RootAction, LoadFxRatesAction} from '../actions';
import {FxState, Currency, RootState, SourceState} from '../types';
import {SELECT_CURRENCY_FROM, UPDATE_AMOUNT_TO, LOAD_FX_RATES, UPDATE_AMOUNT_FROM, SELECT_CURRENCY_TO} from '../constants';
import * as R from 'ramda';

export const initialRootState: RootState = {
    calc: {
        fromState: {
            direction: 'from',
            amount: undefined,
            code: undefined
        },
        toState: {
            direction: 'to',
            amount: undefined,
            code: undefined
        },
    },
    fx: {
        currencies: [],
        base: 'EUR',
        currencyDict: {},
        rates: {}
    }
}


const updateAmount = (state: SourceState, amount?: number): SourceState => {
    if (amount)
        return {
            ...state,
            amount: amount
        }
    return state;
}

const updateCurrency = (state: SourceState, code?: string): SourceState => {
    return {
        ...state,
        code: code
    }
}



export function converter(state: RootState = initialRootState, action: RootAction): RootState {
    const applyFx = (from?: string, to?: string, amount?: number, target?: number): number | undefined => {
        const calcFx = (from: string, to: string, amount: number): number => {
            let rate = 1;
            if (from === state.fx.base) {
                rate = state.fx.rates[to];
            }
            else if (to == state.fx.base) {
                rate = 1.0 / state.fx.rates[from];
            }
            else {
                rate = (1.0 / state.fx.rates[from]) * state.fx.rates[to];
            }

            return rate * amount;
        }

        if (to && from && amount){
            return calcFx(from, to, amount);
        }

        return target;
    }

    let c = state.calc;
    switch(action.type){
        case UPDATE_AMOUNT_FROM: 
            return {
                ...state,
                calc: {
                    fromState: updateAmount(c.fromState, action.amount),
                    toState: updateAmount(c.toState, applyFx(c.fromState.code!, c.toState.code!, action.amount, c.toState.amount))
                }
            }
        case UPDATE_AMOUNT_TO:
            return {
                ...state,
                calc: {
                    fromState: updateAmount(c.fromState, applyFx(c.toState.code!, c.fromState.code!, action.amount, c.fromState.amount)),
                    toState: updateAmount(c.toState, action.amount)
                }
            }
        case SELECT_CURRENCY_FROM:
            return {
                ...state,
                calc: {
                    fromState: updateCurrency(c.fromState, action.code),
                    toState: updateAmount(c.toState, applyFx(action.code, c.toState.code!, c.fromState.amount, c.toState.amount))
                }
            }
        case SELECT_CURRENCY_TO:
            return {
                ...state,
                calc: {
                    fromState: updateAmount(c.fromState, applyFx(action.code, c.fromState.code!, c.toState.amount, c.fromState.amount)),
                    toState: updateCurrency(c.toState, action.code)
                }
            }
        case LOAD_FX_RATES:
            return {
                ...state,
                fx: load_rates(state.fx, action)
            }
    }
    return state;
}

export function load_rates(state: FxState = initialRootState.fx, action: LoadFxRatesAction): FxState {
    // should be first in list and equal to one.
    const findBaseCurrency = R.find((c: Currency) => action.rates[c.code] === 1);

    return {
        ...state,
        currencies: action.currencies,
        currencyDict: R.indexBy(x => x.code, action.currencies),
        rates: action.rates,
        base: findBaseCurrency(action.currencies)!.code,
    }
}