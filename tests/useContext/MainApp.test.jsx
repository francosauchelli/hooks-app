import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/useContext/MainApp"

describe( 'Prueba en <MainApp />', () => {
    test( 'Prueba que la primera página sea del HomePage', () => {
        render( 
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'HomePage' )).toBeTruthy();
    });

    test( 'Prueba que se encuentre en el LoginPage cuando el path="/login"', () => {
        render( 
            <MemoryRouter initialEntries={[ '/login' ]} >
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'LoginPage' )).toBeTruthy();
    });

    test( 'Prueba que se encuentre en el AboutPage cuando el path="/about"', () => {
        render( 
            <MemoryRouter initialEntries={[ '/about' ]} >
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'AboutPage' )).toBeTruthy();
    });

    test( 'Prueba que se encuentre en el AboutPage cuando el path="/*"', () => {
        render( 
            <MemoryRouter initialEntries={[ '/*' ]} >
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText( 'HomePage' )).toBeTruthy();
    });
})