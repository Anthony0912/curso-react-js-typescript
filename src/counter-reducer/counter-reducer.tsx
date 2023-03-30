import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counter-reducer";
import { doInCreaseBy, doReset } from "./actions/actions";

const INITIAL_STATE: CounterState = {
    counter: 10,
    previous: 15,
    changes: 20
}

export const CounterReducerComponent = () => {
    const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const increaseBy = (value: number) => {
        dispatch(doInCreaseBy(value));
    }

    const handleReset = () => {
        dispatch(doReset());
    }

    return (
        <>
            <h1>Counter Reducer secundario:  {counter}</h1>
            <button onClick={() => increaseBy(1)}> +1</button>
            <button onClick={() => increaseBy(5)}> +5</button>
            <button onClick={() => increaseBy(10)}> +10</button>
            <button onClick={handleReset}> Reset</button>
        </>
    );
}