import React from 'react';
import {TodoContext} from '../contexts';
import uuid from 'react-uuid';

class TodoProvider extends React.Component{
    state={
        todoList:[
            {
                 id:uuid(),
                 name:'Apple',
                 img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Single_apple.png',
                 isActive:false
            },
            {
                id:uuid(),
                name:'Orange',
                img: 'https://png.pngtree.com/png-clipart/20190515/original/pngtree-orange-png-png-image_3619070.jpg',
                isActive:false
           },
           {
                id:uuid(),
                name:'Pear',
                img: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-hand-painted-fruit-pears-for-commercial-elements-drawn-fruitpearyellow-pearfruithand-png-image_4079930.jpg',
                isActive:false
           }
        ],
        formController: {
            name: {
                value: '',
                valid: false,
                touched: false
            },
            img: {
                value: '',
                valid: false,
                touched: false
            }
        }
        
     }
     addTodo = () => {
        console.log(this.state.formController.name.value);
        const todoList = [...this.state.todoList];
        todoList.push({
            id: uuid(),
            name: this.state.formController.name.value,
            img: this.state.formController.img.value,
            isActive: false
        });
        this.setState(prevState => ({
            ...prevState,
            todoList: todoList,
            formController: {
                name: {
                    value: '',
                    valid: false,
                    touched: false
                },
                img: {
                    value: '',
                    valid: false,
                    touched: false
                }
            }
        }))
    }
    onChangeHandler = (e) => {
        const { name, value } = e.target;
console.log(name);
        this.setState(prevState => ({
            ...prevState,
            formController: {
                ...this.state.formController,
                [name]: {
                    value: value,
                    valid: true,
                    touched: true
                }
            }
        }))
    }
     toggleActiveTodoItem = (id)=>{
         const todoList=[...this.state.todoList];
         const idx=todoList.findIndex(todo=>todo.id===id);
         todoList[idx].isActive=!todoList[idx].isActive;
         this.setState(prevState=>({
             ...prevState,
             todoList
         }))
     }
     deleteTodo=(id)=>{
         const todoList=[...this.state.todoList];
         const idx = todoList.findIndex(todo => todo.id === id);
        todoList.splice(idx, 1);
        this.setState(prevState => ({
            ...prevState,
            todoList
        }))
     }
     render(){
         return (
             <TodoContext.Provider
             value={{
                 state:this.state,
                 deleteTodo:this.deleteTodo,
                 toggleActiveTodoItem:this.toggleActiveTodoItem,
                 addTodo:this.addTodo,
                 onChangeHandler:this.onChangeHandler

             } }>
                
                 {this.props.children}
             </TodoContext.Provider>
         )
     }
}
export default TodoProvider;