export const TodoItem = ({ props, onRemoveTodo, onToggleTodo }) => {
    const { id, description, done } = props;

    return ( 
        <li 
            className="list-group-item d-flex justify-content-between"
            onClick={ () => onToggleTodo( id ) }
        >
            <span 
                className={ `align-self-center ${ done ? 'text-decoration-line-through' : '' }` }
                aria-label="span"
            >
                { description }
            </span>
            <button 
                className="btn btn-danger"
                onClick={ () => onRemoveTodo( id ) }
            >X</button>
        </li>
    );
}