import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClickFocus = () => {
        inputRef.current.select();
    }
    return ( 
        <>
            <h1>Focuse Screen</h1>     
            <hr />
            <input 
                ref={ inputRef }
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />   
            <button 
                className="btn btn-primary mt-2"
                onClick={ onClickFocus }
            >
                Focus Text
            </button>
        </>
    );
}