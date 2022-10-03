import { useState } from "react";

export const CounterApp = () => {

    const [ counter, useCounter ] = useState({
        state1: 10,
        state2: 20,
        state3: 30,
    });

    const { state1, state2, state3 } = counter;

    const addStateOne = () => {
        useCounter({
            ...counter,
            state1: state1 + 1,
        })
    }

    return (
        <>
            <h1>Counter1: { state1 } </h1>
            <h1>Counter2: { state2 } </h1>
            <h1>Counter3: { state3 } </h1>

            <hr />

            <button 
                className="btn"
                onClick={ addStateOne }
                >+1</button>
        </>
    )
}