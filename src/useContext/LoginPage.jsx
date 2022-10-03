import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );


    return (  
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre aria-label='pre' >
                { JSON.stringify( user, null, 3 )}
            </pre>
            <button 
                className="btn btn-dark"
                onClick={ () => setUser( {id: 123, name: 'Franco', mail: 'franco@google.com' }) }
            >
                Set User
            </button>
            <button 
                className="btn btn-dark"
                onClick={ () => setUser( undefined ) }
            >
                Cancel User
            </button>
        </>
    );
}