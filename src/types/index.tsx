import { Dictionary } from "ramda";

export interface SourceState {
    amount?: number;
    code?: string;
    rememberSelection: boolean;
}

export interface FxState {
    currencies: ReadonlyArray<Currency>;
    currencyDict: Dictionary<Currency>
    rates: Dictionary<number>;
    base: string;
    date: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol?: string;
    flag?: string;
}

export interface CalculatorState {
    readonly fromState: SourceState;
    readonly toState: SourceState;
}

export interface RootState {
    readonly calc: CalculatorState;
    readonly fx: FxState;
}

export type SourceDirection =
    | 'from'
    | 'to'