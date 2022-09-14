import React from 'react'
import { useState } from 'react'

const TaskCreator = () => {

    const [newTask, setNewTask] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log('agregando')
        setNewTask('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Insert a new task'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default TaskCreator