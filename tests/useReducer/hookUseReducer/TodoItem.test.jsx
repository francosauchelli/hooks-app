import { screen, render, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../../src/useReducer/hookUseReducer/TodoItem";

describe( 'Prueba en <TodoItem />', () => {

    const todoMock = {
        id: 1,
        description: 'Aprender React',
        done: false
    }

    const onRemoveTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test( 'Prueba que se cargue el TODO pendiente, al cargar', () => {
        render( 
        <TodoItem
            props={ todoMock }
            onRemoveTodo={ onRemoveTodoMock }
            onToggleTodo={ onToggleTodoMock }
        />);

        const liElement = screen.getByRole( 'listitem' );
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );


        const spanElement = screen.getByLabelText( 'span' );
        expect( spanElement.className ).toBe( 'align-self-center ' );
        // como tiene un espacio, también se puede poner:
        expect( spanElement.className ).toContain( 'align-self-center' );
        // luego, negar la otra clase que no debería ir:
        expect( spanElement.className ).not.toContain( 'text-decoration-line-through' );
    })

    test( 'Prueba que cargue el TODO completado', () => {

        todoMock.done = true;
        
        render( 
        <TodoItem
            props={ todoMock }
            onRemoveTodo={ onRemoveTodoMock }
            onToggleTodo={ onToggleTodoMock }
        />);

        const spanElement = screen.getByLabelText( 'span' );
        expect( spanElement.className ).toBe( 'align-self-center text-decoration-line-through' );
        expect( spanElement.className ).not.toBe( 'align-self-center' );

    })

    test( 'span debe llamar Toggle todo cuando se hace click', () => {

        render( 
            <TodoItem
                props={ todoMock }
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />);

        const spanElement = screen.getByLabelText( 'span' );

        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todoMock.id );


    });

    
    test( 'button debe llamar el onRemoveTodoMock', () => {

        render( 
            <TodoItem
                props={ todoMock }
                onRemoveTodo={ onRemoveTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />);

        const buttonElement = screen.getByRole( 'button' );

        fireEvent.click( buttonElement );

        expect( onRemoveTodoMock ).toHaveBeenCalledWith( todoMock.id );

    });

})