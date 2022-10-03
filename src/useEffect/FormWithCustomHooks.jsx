import { useState, useEffect } from "react";

import { useForm } from "../hooks/useForm";


export const FormWithCustomHooks = () => {

    const { username, email, password, onChangeForm, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });


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
                value={ username }
            />
            <input 
                type="email"
                className='form-control mt-2'
                placeholder='email'
                name='email'
                onChange={ onChangeForm }
                value={ email }
            />

            <input 
                type="password"
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                onChange={ onChangeForm }
                value={ password }
            />
            <button className='btn btn-primary mt-3' onClick={ onResetForm }>Reset</button>
        </>
    );
}