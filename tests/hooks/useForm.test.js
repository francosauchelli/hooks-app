import { renderHook,act } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe( 'Prueba de useForm', () => {

    const initialValue = {
        name: 'Franco',
        email: 'francosauchelli@google.com'
    }

    test( 'Debe devolver un objeto con el initialValue ', () => {
        const { result } = renderHook( () => useForm( initialValue ) );

        expect( result.current ).toEqual( {
            name: result.current.name,
            email: result.current.email,
            formState: { name: result.current.name, email: 'francosauchelli@google.com' },
            onChangeForm: expect.any( Function ),
            onResetForm: expect.any( Function )
        })
    })

    test( 'Debe cambiar el nombre del formulario', () => {
        const { result } = renderHook( () => useForm( initialValue ) );
        const { onChangeForm } = result.current;

        const newValue = 'Juan';
        
        act( () => {

            onChangeForm({ target: {
                name: 'name',
                value: newValue,
            }});

        })
        
        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
        expect( result.current ).toEqual(
            {
                name: newValue,
                email: 'francosauchelli@google.com',
                formState: { name: newValue, email: 'francosauchelli@google.com' },
                onChangeForm:expect.any( Function ),
                onResetForm: expect.any( Function )
            }
        )
    })

    test( 'Reset debe devolver el objeto con los valores originales', () => {
        const { result } = renderHook( () => useForm( initialValue ) );
        const { onChangeForm, onResetForm } = result.current;
        console.log(onResetForm)
        const newValue = 'Juan';
        
        act( () => {
            
            onChangeForm({ target: {
                name: 'name',
                value: newValue,
            }});

            onResetForm();
        })

        expect( result.current.name ).toBe( initialValue.name );
        expect( result.current.formState.name ).toBe( initialValue.name );
    })
})