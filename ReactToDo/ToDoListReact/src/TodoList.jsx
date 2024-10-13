import React, { useState } from "react";

function ToDoList(params) {
    
    const [tasks, setTasks] = useState(['Shower', 'Walk the dog', 'Take out trash']);
    const [newTask, setNewTask] = useState("");
 
    function handleInputChange(event){

    }

    function addTask(){

    }

    function deleteTask(index){

    }
    function moveUp(index) {
        
    }
    function moveDown(index) {
        
    }


    return(
        <div className="to-do-list"> 
        <h1 className="text-9xl">ToDo List</h1>
        <div>
            <input
                className="p-2"
                type="text"
                placeholder="What task would you like to add?"
                value={newTask} 
                onChange={handleInputChange}
            
            ></input>
            <button
            className="m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={addTask}>Add ToDo</button>
        </div>
        
        
        
        </div>
    )
    
}

export default ToDoList ; 