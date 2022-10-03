// import { memo } from "react";
import React from "react";

export const Small = React.memo(({ value }) => {

    console.log( 'me he redibujado :(' );

    return ( 
        <small>{ value }</small>
    );
})