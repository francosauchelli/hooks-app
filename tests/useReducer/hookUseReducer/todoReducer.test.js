import { todoReducer } from "../../../src/useReducer/hookUseReducer/todoReducer";

describe( 'Prueba en useReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];
    
    test( 'Debe devolver el estado inicial', () => {
        const newState = todoReducer( initialState, {} );

        /* de esta manera se evalúa que los atributos del objeto sean iguales, pero no verifica
        que sea exáctamente el mismo objeto en el mismo espacio de memoria */
        expect( newState[ 0 ] ).toEqual({
            id: initialState[0].id,
            description: initialState[0].description,
            done: initialState[0].done
        })

        /* se hace la evaluación de esta manera porque el objeto pasa por referencia, por lo que 
        así se puede verificar que se idénticamente el mismo
        Apunta al mismo lugar de memoria */
        expect( newState ).toBe( initialState );

    });

    test( 'Debe agregar un nuevo TODO', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Demo Todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
        
    });

    test( 'Debe eliminar un TODO determinado', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );

        const action2 = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Demo Todo #2',
                done: false
            }
        }

        const action3 = {
            type: '[TODO] Add Todo',
            payload: {
                id: 3,
                description: 'Demo Todo #3',
                done: false
            }
        }

        const newState2 = todoReducer( newState, action2 );
        const newState3 = todoReducer( newState2, action3 );
        const action4 = {
            type: '[TODO] Remove Todo',
            payload: 2
        }

        const newState4 = todoReducer( newState3, action4 );

        expect( newState4.length ).toBe( 1 );

    });

    test( 'Toggle Todo debe cambiar el estado del "done"', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );

        expect( newState[0].done ).toBeTruthy();

        const newState2 = todoReducer( newState, action );

        expect( newState2[0].done ).toBeFalsy();

    });

});