function startPage() {
    const TodoForm = ({addTodo}) => {

        let input;

        return (
            <div>
                <input ref={node => {
                    input = node;
                }} />
                <button onClick={() => {
                    addTodo(input.value);
                    input.value = '';
                }}>
                    +
                </button>
            </div>
        );
    };

    const Todo = ({todo, remove}) => {
        return (<li onclick(remove(todo.id))>{todo.text}</li>);
    }

    const TodoList = ({todos, remove}) => {
        const todoNode = todos.map((todo) => {
            return (<Todo todo={todo} key=todo.id) remove={remove}/>)
        });
        return (<ul>{todoNode}</ul>);
    }


}

$(document).ready(startPage)
