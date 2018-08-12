import { Dictionary } from "ramda";

export interface SourceState {
    direction: SourceDirection;
    amount?: number;
    code?: string;
}

export interface FxState {
    currencies: ReadonlyArray<Currency>;
    currencyDict: Dictionary<Currency>
    rates: Dictionary<number>;
    base: string;
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