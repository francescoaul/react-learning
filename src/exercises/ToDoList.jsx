import { useState } from "react";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]) // set tasks to be an array
    const [text, setText] = useState("")

        function addTask() {
            if (!text.trim()) return ;
            const newTask = {
                id: Date.now(),
                text: text.trim(),
                done: false
            };
            setTasks([...tasks, newTask]);
            setText("");
        }

        function toggleTask(id) {
            setTasks(tasks.map(task =>
                task.id === id
                ? {
                    ...task,
                    done: !task.done
                }
                : task
            ));
        }

        function updateText(id, newText) {
            setTasks(tasks.map(t =>
                t.id === id
                ? {
                    ...t,
                    text: newText
                }
                : t
            ));
        }
        
        function removeTask(id) {
            setTasks(tasks.filter(t => t.id !== id));
        }
        
        return (
            <div style={{ maxWidth: 400, margin: "auto", padding: "1rem"}}>
                <h2>Todo List</h2>

            <input value={text}
            onChange={e => setText(e.target.value)}
            placeholder="New Task"
            style={{ width: "70%",height: "3rem", fontSize: "1.1rem", marginRight: "0.5rem", padding: "0.5rem" }}
           />

            <button onClick={addTask} style={{ padding: "1rem"}}>Add Task</button>

            <ul style={{ listStyle: "none", padding: 0}}>
                {tasks.map(task => (
                    <li key={task.id} style={{margin: "0.5rem"}}>

                    <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    />

                     <input
                    type="text"
                    value={task.text}
                    onChange={e => updateText(task.id, e.target.value)}
                    style={{
                        marginLeft: "0.5rem",
                        textDecoration: task.done ? "line-through" : "none",
                        width: "60%",
                        height: "5rem",
                        padding: "0.5rem",
                        fontSize: "1rem"
                    }}
                    />
                
                    <button onClick={() => removeTask(task.id)} style={{marginLeft: "0.5rem"}}>
                    Remove
                    </button>

                    </li>
                ))}

            </ul>

            </div>
        )
}