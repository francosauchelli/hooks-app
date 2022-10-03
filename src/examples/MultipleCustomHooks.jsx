import { useFetch, useCounter } from "../hooks";

import { LoaderQuote, Quote } from "./components";


export const MultipleCustomHooks = () => {

    const { increment, reset, decrement, counter } = useCounter( 1 );
    
    const { data, isLoading } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad - Quotes</h1>
            <hr />
            {
                ( isLoading ) 
                    ? ( <LoaderQuote />)
                    : ( <Quote quote={ quote } author={ author } />)
            }

            <button 
                className="btn btn-primary" 
                disabled={ ( isLoading || counter === 1 ) }
                onClick={ decrement } 
            >
                Previous Quote
            </button>
            <button 
                className="btn btn-primary" 
                disabled={ isLoading }
                onClick={ reset } 
            >
                Reset Quotes
            </button>            <button 
                className="btn btn-primary" 
                disabled={ isLoading }
                onClick={ increment } 
            >
                Next Quote
            </button>
        </>
    );
}