import { useState } from 'react'
import './Todo.css'
import {FaTrash} from 'react-icons/fa'


const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [input,setInput] = useState('');

    const addTodo = ()=>{
        const setdate = new Date().toLocaleString();

        input !== "" ? setTodo([...todo, { text:input ,time:setdate }]) : ""
    }

    const updateTodo = (index)=>{
        const update = [...todo];
        update.splice(index, 1);
        setTodo(update);
    }

  return (
    <>
    <section className="container">
        <div className="top">
            <h3>Todo List</h3>
            <input
            type="text" 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>

        </div>

        <div className="bottom">

            <ul>
                {
                    todo.map((item,index)=>{
                        return (
                            <li key={index} className='list-item'>
                                <span>{item.text}</span>
                             

                                <div className="content">
                                    <button onClick={updateTodo}><FaTrash/></button>
                                    <span>{item.time}</span>

                                </div>

                               
                            </li>


                        )
                    })
                }
            </ul>


        </div>


        <div className="copy">
            <p>&copy; Made by: <br/> Oluwuyi Olumide {new Date().getFullYear()}</p>
        </div>
    </section>
    </>
  )
}

export default Todo