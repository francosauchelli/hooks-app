import { useMemo, useState } from "react";
import { useCounter } from "../../hooks";

const heavyStuff = ( qqIterations = 100 ) => {

    for( let i = 0; i < qqIterations; i++ ) {
        console.log( 'Here we go!');
    }

    return `Has been iterated ${ qqIterations } times..`;
}



export const MemoHook = () => {

    const { counter, increment } = useCounter( 100 );

    const [ show, setShow ] = useState( false );

    const valueMemorized = useMemo( () => heavyStuff(500), [ counter ])

    return ( 
        <>
            <h1>useMemo (Hook) - Counter e.g.: <small>{ counter }</small></h1>
            <h4>{ valueMemorized }</h4>
            <hr />
            <button 
                className='btn btn-primary'
                onClick={ increment }
            >
                +1
            </button>
            <button 
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide: { JSON.stringify( show ) } 
            </button>
        </>
    );
}