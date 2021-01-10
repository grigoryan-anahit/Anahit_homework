import style from '../todo.module.css';

const TodoTable=({todoList,deleteTodo, toggleActiveTodoItem})=>{
  const todoListJsx=todoList.map(todo=>{
    return(
        <tr key={todo.id}  >
            <td >
                {todo.name  } 
            </td>
            <td >
               <img src={todo.img} className={style.todoImg} alt='todo img'/> 
            </td>
            <td>
                <button className='btn btn-danger'
                onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
             </td>
             <td className={style.todoItem}>
                <button className={todo.isActive ? "btn btn-danger" : "btn btn-primary"}
                onClick={()=>toggleActiveTodoItem(todo.id)}>
                    {todo.isActive ? "Deactivate" : "Activate"}
                </button>
             </td>
        </tr>
    )
  })
    return (
    <table className={style.todoTable}>
        <thead>
            <tr>
                <th className={style.todoItem}>Name </th>
                <th className={style.todoItem}>Avatar</th>
                <th className={style.todoItem}>Delete </th>
                <th>Activate/Deactivate </th>
            </tr>
        </thead>
        <tbody>
            {todoListJsx}
        </tbody>
    </table>
    )
}
export default TodoTable;