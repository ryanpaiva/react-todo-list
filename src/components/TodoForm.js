import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value) {
            addTodo(value)

            setValue("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" className="todo-input" value={value} placeholder="Qual a tarefa de hoje?"
                onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="todo-btn">Adicionar tarefa</button>
        </form>
    )
}