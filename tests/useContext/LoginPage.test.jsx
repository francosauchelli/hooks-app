import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/useContext/context/UserContext';
import { LoginPage } from '../../src/useContext/LoginPage';


describe( 'Prueba en <LoginPage />', () => {
    test( 'El componente debe renderizar sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )


        const preTag = screen.getByLabelText( 'pre' );

        expect( preTag.innerHTML ).toBe( 'null' );
    });

    test( 'Debe llamar el setUser cuando el usuario hace click', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const setUserButton = screen.getAllByRole( 'button' );

        fireEvent.click( setUserButton[0] );

        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith({"id": 123, "mail": "franco@google.com", "name": "Franco"});

    })

})