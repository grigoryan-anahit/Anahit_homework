import style from '../todo.module.css';

const TodoForm=(props)=>{
    return (
    <div className={style.todoForm}>
        <input type="text"
            name="name"  
           value={props.nameInputValue}
            placeholder="Type todo name"
            className={style.todoInput} 
            onChange={props.onChangeHandler}
          />
        <input type="text"
            name="img"  
           value={props.imgInputValue}
            placeholder="Type todo img URL"
            className={style.todoInput} 
            onChange={props.onChangeHandler}
          />
        <button onClick={props.addTodo}>ADD</button>
    </div>
    )
    
}
export default TodoForm;