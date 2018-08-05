import {AmountAction, SelectCurrency} from '../actions';
import {SourceState} from '../types/index';
import {UPDATE_FROM, UPDATE_TO, SELECT_CURRENCY} from '../constants/index';


export function amount(state: SourceState, action: AmountAction) {
    switch(action.type){
        case UPDATE_FROM:
            return {...state, }
        case UPDATE_TO:
            return { ...state, }
    }
}

export function currency(state: SourceState, action: SelectCurrency){
    switch(action.type){
        case SELECT_CURRENCY:
            return {...state, }
    }
}