

const initialState = [{
    id: 1,
    todo: 'clasificar a 8vos de final',
    done: false,
}]

const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[Todo] add todo' ) {
        return [ ...state, action.playload ];
    }
    
    return state;
}

let todo = todoReducer();

console.log({ state: todo })


const newTodo = {
    id: 2,
    todo: 'pasar a 4tos de final',
    done: false,
}

const addTodoAction = {
    type: '[Todo] add todo',
    playload: newTodo,
}

todo = todoReducer( todo, addTodoAction );

console.log({ state: todo })