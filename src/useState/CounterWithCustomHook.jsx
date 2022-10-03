import { useCounter } from "../hooks/useCounter";


export const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement } = useCounter();

    return (
        <>
            <h1>Counter With Custom Hook: { counter }</h1>

            <hr />

            <button className="btn btn-outline-primary" onClick={ increment }>+1</button>
            <button className="btn btn-outline-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-outline-primary" onClick={ decrement }>-1</button>
        </>
    )
}