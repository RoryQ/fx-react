import * as constants from '../constants';
import { Currency } from '../types';
import { Dictionary } from 'ramda';

export interface UpdateAmountFrom {
    type: constants.UPDATE_AMOUNT_FROM;
    amount: number;
}
export interface UpdateAmountTo {
    type: constants.UPDATE_AMOUNT_TO;
    amount: number;
}

export interface SelectCurrencyFrom {
    type: constants.SELECT_CURRENCY_FROM;
    code: string;
}

export interface SelectCurrencyTo {
    type: constants.SELECT_CURRENCY_TO;
    code: string;
}

export interface LoadFxRatesAction {
    type: constants.LOAD_FX_RATES;
    rates: Dictionary<number>;
    currencies: Array<Currency>
}

export type UpdateAmountActions = UpdateAmountFrom | UpdateAmountTo;
export type SelectCurrencyActions = SelectCurrencyFrom | SelectCurrencyTo;

export type RootAction = UpdateAmountActions | SelectCurrencyActions | LoadFxRatesAction;

export function updateAmountFrom(amount: number): UpdateAmountActions {
    return {
        type: constants.UPDATE_AMOUNT_FROM,
        amount
    };
}

export function updateAmountTo(amount: number): UpdateAmountActions {
    return {
        type: constants.UPDATE_AMOUNT_TO,
        amount
    };
}

export function selectCurrencyFrom(code: string): SelectCurrencyActions {
    return {
        type: constants.SELECT_CURRENCY_FROM,
        code
    };
}

export function selectCurrencyTo(code: string): SelectCurrencyActions {
    return {
        type: constants.SELECT_CURRENCY_TO,
        code
    };
}

export function LoadFxRates(currencies: Array<Currency>, rates: Dictionary<number>): LoadFxRatesAction {
    return {
        type: constants.LOAD_FX_RATES,
        currencies,
        rates
    }
}