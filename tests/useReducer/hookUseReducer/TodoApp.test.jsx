import  { render, screen } from '@testing-library/react';
import  { useTodo } from '../../../src/hooks';
import { TodoApp } from '../../../src/useReducer/hookUseReducer/TodoApp';


jest.mock( '../../../src/hooks/useTodo' );

describe( 'Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'TODO #1', done: false },
            { id: 2, description: 'TODO #2', done: true },
            { id: 3, description: 'TODO #3', done: false }
        ],
        todosCount: 3,
        pendingTodosCount: 2,
        handleNewTodo: jest.fn(),
        handleRemoveTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    })


    test( 'Prueba que el componente cargue los TODOs correctamente', () => {


        render( <TodoApp /> );

        expect( screen.getByText( 'TODO #1' )).toBeTruthy();
        expect( screen.getByText( 'TODO #2' )).toBeTruthy();
        expect( screen.getByText( 'TODO #3' )).toBeTruthy();

        expect( screen.getByRole( 'textbox') ).toBeTruthy();
    });

});