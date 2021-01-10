import { TodoContext } from "../../context/contexts";
import TodoTable from "./todoTable";
import style from './todo.module.css';
import TodoForm from './addTodoForm';


const Todo=(props)=>{
    return(
        <TodoContext.Consumer>
            {
                context=>{
                    const {todoList}=context.state;
                    return (
                        <div className={style.TodoPage}>
                            <h1>Todo Page</h1>
                            <TodoForm 
                            addTodo={context.addTodo}
                            onChangeHandler={context.onChangeHandler}
                             nameInputValue={context.state.formController.name.value}
                             imgInputValue={context.state.formController.img.value}
                            
                            />
                            <TodoTable
                            todoList={todoList} 
                            deleteTodo={context.deleteTodo}
                            toggleActiveTodoItem={context.toggleActiveTodoItem}
                            />
                        </div>
                        )
                }
            }
      </TodoContext.Consumer>
    )
}
export default Todo;