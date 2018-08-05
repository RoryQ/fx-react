import * as constants from '../constants';

export interface UpdatedFrom {
    type: constants.UPDATE_FROM;
}

export interface UpdatedTo {
    type: constants.UPDATE_TO;
}

export interface SelectCurrency {
    type: constants.SELECT_CURRENCY;
}

export type AmountAction = UpdatedFrom | UpdatedTo;

export type SelectCurrencyAction = SelectCurrency;

export function updatedFrom(): UpdatedFrom {
    return {
        type: constants.UPDATE_FROM
    };
}

export function updatedTo(): UpdatedTo {
    return {
        type: constants.UPDATE_TO
    };
}

export function selectCurrency(): SelectCurrency {
    return {
        type: constants.SELECT_CURRENCY
    };
}