import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MultipleCustomHooks } from '../../src/examples/MultipleCustomHooks';
import { useFetch, useCounter } from '../../src/hooks/';

jest.mock('../../src/hooks/useFetch');
jest.mock( '../../src/hooks/useCounter' );


describe( 'Prueba sobre <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test( 'Prueba el estado inicial del componente', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole( 'button', {name: 'Previous Quote'})

        expect( nextButton.disabled ).toBeTruthy();

        expect( screen.getByText( 'Breaking Bad - Quotes' ));
        expect( screen.getByText( 'Loading...' ));

    })

    test( 'Prueba que el fetch devuelva una Quote', () => {

        useFetch.mockReturnValue({
            data: [{ quote: 'Say my name', author: 'Walter White' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );


        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' })
        const prevButton = screen.getByRole( 'button', { name: 'Previous Quote' });


        screen.debug();

        expect( screen.getByText( 'Say my name' ));
        expect( screen.getByText( 'Walter White' ));
        expect( nextButton.disabled ).toBeFalsy();
        expect( prevButton.disabled ).toBeTruthy();
    })

    test( 'Debe llamar la función increment', () => {

        useFetch.mockReturnValue({
            data: [{ quote: 'Say my name', author: 'Walter White' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );


        const nextButton = screen.getByRole( 'button', { name: 'Next Quote' });

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });
})