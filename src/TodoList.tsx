import React, { useState } from "react";

interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Learn Redux', completed: false},
    ])

    const [input, setInput] = useState<string>("")

    const handleClick = () => {
        const newTodo: item = {id: Date.now(), text:input, completed: false}
        setTodos([...todos, newTodo])
    }

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, completed:! todo.completed}
                }

                return todo;
            })
        );
    };

    return <div className="main-container">
        <h1>Todo List</h1>

        <ul>
            {todos.map((todo) => (
                <li key = {todo.id} onClick={() => handleToggle(todo.id)} style = {{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</li>
            ))}
        </ul>

        <input
            type = "text"
            placeholder = "Add todo item"
            onChange = {(e) => setInput(e.currentTarget.value)}
        />
        <button onClick={handleClick}>Add</button>
    </div>
}