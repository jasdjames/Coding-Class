import React, { useState, useEffect } from "react";

function ToDoList(params) {
    const [tasks, setTasks] = useState(![]?persistedData:[])
    const [newTask, setNewTask] = useState("");
    const persistedData = localStorage.getItem("task-list")
  
    useEffect(() => {
        
        if(persistedData) {

            
            setTasks(JSON.parse(persistedData));
            [...tasks]
            console.log("after",persistedData);
            console.log("after tasks!!!", tasks);
            
        
        }  
     

         
     
    }, []);
   
   
    useEffect(() => {
       
       localStorage.setItem("task-list", JSON.stringify(tasks));
       console.log('stringify-ed tasklist', tasks);
       
     
}, [tasks]); 
   
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); 

    }
    function moveUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }  
        
    }
    function moveDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(
        <div className="to-do-list"> 
        <h1 className="text-9xl m-3">ToDo List</h1>
        <div className="border-y-2 border-primary-600">
        <div>
            <input
                className="p-2 m-2"
                type="text"
                placeholder="What task would you like to add?"
                value={newTask} 
                onChange={handleInputChange}
            
            ></input>
            <button
            className="m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={addTask}>Add ToDo</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
             <li key={index}>
                <span className="text">{task}</span>
                <button className= "delete-button m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={()=>deleteTask(index)}>
                        Delete Task 
                    </button>        
                    <button className= "move-button m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={()=>moveUp(index)}>
                         ☝
                    </button>

                    <button className= "move-button m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={()=>moveDown(index)}>
                         👇
                    </button>



            </li>
            
            
            )}

          
        </ol>
        
        
        
        </div>
        </div>
    )
    
}

export default ToDoList ; 