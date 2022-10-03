const { renderHook } = require("@testing-library/react");

import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter';

describe( 'Pruebas en el useCounter', () => {

    test( 'Prueba que los valores que retorna por defecto', () => {

        const { result } = renderHook( () => useCounter () );

        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    });

    test( 'Prueba que si se envía un argumento, sea el valor inicial del counter', () => {

        const { result } = renderHook( () => useCounter( 300 ));

        const { counter } = result.current;

        expect( counter ).toBe( 300 );
    });

    test( 'Prueba que el increment aumente el valor del counter', () => {
        const { result } = renderHook( () => useCounter () );

        const { increment } = result.current;
        
        act( () => {
            increment();
        })

        expect( result.current.counter ).toBe( 11 );

    });

    test( 'Prueba que el decrement disminuya el valor del counter', () => {
        const { result } = renderHook( () => useCounter () );

        const { decrement } = result.current;
        
        act( () => {
            decrement();
        })

        expect( result.current.counter ).toBe( 9 );

    });
    

    test( 'Prueba que el reset vuelva al valor inicial', () => {
        const { result } = renderHook( () => useCounter () );

        const { increment, reset } = result.current;
        
        act( () => {
            increment();
            reset();
        })

        expect( result.current.counter ).toBe( 10 );

    });
    


})