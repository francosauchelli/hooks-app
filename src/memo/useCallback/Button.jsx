
import React from "react";


export const Button = React.memo( ({ increment }) => {

    console.log( 'i´ve been rendered...' );

    return ( 
        <button 
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 );
            }}    
        >
            +1
        </button>
    );
});