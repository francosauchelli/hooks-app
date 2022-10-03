import { useState } from "react";


export const useForm = ( initialValues ) => {

    const [ formState, setFormState ] = useState( initialValues )

    const onChangeForm = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    const onResetForm = () => {
        setFormState( initialValues );
    }

    return {
        ...formState,
        formState,
        onChangeForm,
        onResetForm,
    };
}