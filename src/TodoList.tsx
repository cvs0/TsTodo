import React, { useState } from "react";

interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoList: React.FC = () => {
    return <div className="main-container">
        <h1>Todo List</h1>

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>

        <input type="text" placeholder = "Add todo item" />
        <button>Add</button>
    </div>
}