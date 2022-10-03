import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/useContext/context/UserContext";
import { HomePage } from "../../src/useContext/HomePage"

describe( 'Prueba sobre <HomePage />', () => {
    

    const user = {
        id: 1,
        name: 'Franco'
    }


    test( 'Debe mostrar el componente con el usuario: null', () => {
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
            );

        const preTag = screen.getByLabelText( 'pre' );

        expect( preTag.innerHTML ).toBe( 'null' );


    });

    test( 'Debe mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user: user }} >
                <HomePage />
            </UserContext.Provider>
        );


        const preTag = screen.getByLabelText( 'pre' );

        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );
    });
})