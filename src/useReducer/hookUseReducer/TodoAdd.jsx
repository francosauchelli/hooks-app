import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { onChangeForm, onResetForm, description } = useForm({ description: '', });


    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo( newTodo );
        onResetForm();

    }


    return (
        <form action="submit">
            <input 
                type="text"
                placeholder="What needs to be done?" 
                className="form-control"
                name="description"
                value={ description }
                onChange={ onChangeForm }
            />
            <button 
                className="btn btn-primary mt-2"
                onClick={ handleSubmit }
            >
                Add Task
            </button>
        </form>
    );
}