import { useState, useCallback } from "react";

import { Button } from "./Button";


export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 10 );

    //  # func sin argumento
    // const incrementFather = useCallback( () => {
    //     setCounter( ( value ) => value + 1 );
    // }, [])

    // # func con argumento

    const incrementFather = useCallback(
        ( arg ) => { setCounter( ( value ) => value + arg )}
    , []);


    return (
        <>
            <h1>useCallback</h1>
            <h4>Counter: { counter }</h4>
            <hr />
            <Button increment={ incrementFather } />
        </>
    )
}