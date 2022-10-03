import { useEffect } from "react";


export const Message = () => {

    useEffect(() => {
        console.log( 'user mounted!')

        return () => {
            console.log( 'user unmounted!')
        }
        
    }, []);


    return ( 
        <>
            <h3>Cargar Usuario</h3>
        </>
    );
}
export default Message;