
import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'      // rfce + TAB

// Definiendo el nombre del contexto.
export const TaskContext = createContext()

// Definiendo el nombre del contenedor que va a contener a todos los componentes, es decir, el nombre del "provider".
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])    // PropDrilling

    function createTask(task){
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }
    
    function deleteTask(taskId){
        //console.log(tasks)
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    //console.log(data)  // clg + TAB
    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
