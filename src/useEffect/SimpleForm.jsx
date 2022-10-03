import { useState, useEffect } from "react";

import { Message } from './Message';


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'username',
        email: 'email',
    })

    const { username, email } = formState;

    
    const onChangeForm = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    // useEffect( () => {
    //     console.log( 'funciona')
    // })

    return ( 
        <>
            <h1>Simple Form</h1>
            <hr />
            <input 
                type="text"
                className='form-control'
                placeholder='username'
                name='username'
                onChange={ onChangeForm }
                // value={ username }
            />
            <input 
                type="email"
                className='form-control mt-2'
                placeholder='email'
                name='email'
                onChange={ onChangeForm }
                // value={ email }
            />
            { ( username === 'username' || username === '' ) && <Message /> }
        </>
    );
}