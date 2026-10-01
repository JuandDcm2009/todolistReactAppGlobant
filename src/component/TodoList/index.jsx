import { useRef, useState } from "react";
import Todo from "../TodoComponent/index.jsx";
import "./styles.css"

function TodoList() {

    const [todos, setTodos] = useState([]);
    const formElement = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const entries = Object.fromEntries(new FormData(formElement.current));
        if (!entries["name"]) return;
        const newTask = {name: entries["name"], completed: false, id: crypto.randomUUID()}; 
        const actualTasks = [...todos, newTask];
        setTodos(actualTasks);
    };

    const handleRemove = (taksId) => {
        const actualTasks = todos.filter((c) => c["id"] !== taksId);
        setTodos(actualTasks);
    }

    const handleCompleteUpdate = (taskId, taskCompletedValue) => {
        const actualTasks = [...todos]; 
        actualTasks.forEach((c, i) => {if (c["id"] == taskId) {
            actualTasks[i]["completed"] = taskCompletedValue;
            return;    
        }})
        
        setTodos(actualTasks);
    }

    return (<>
        <form action="" onSubmit={handleSubmit} ref={formElement}>
            <label htmlFor="">Task name </label>
            <input type="text" name="name"/>
            <button type="submit">Submit</button>
        </form>
        
        <section>
            {todos.map(c => 
                <Todo 
                    id={c["id"]}
                    title={c["name"]}
                    completed={c["completed"]}
                    key={c["id"]}
                    handleRemove={handleRemove}
                    handleUpdate={handleCompleteUpdate}
            />)}
        </section>
            
        <h1>Completed Tasks</h1>
        <ul className="completedTasks">
             {todos.filter(c => c["completed"] == true).map(c => <li><h1 key={c["id"] }>{c["name"]}</h1></li>)}
        </ul>
    </>)
}

export default TodoList;