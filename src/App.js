import './App.css';
import { useState , useEffect } from 'react';
import CreateTask from './components/CreateTask/CreateTask';
import TaskTable from './components/TaskTable/TaskTable';
import VisibilityControl from './components/VisibilityControl/VisibilityControl';

function App() {
  
  const [taskItems, setTaskItem] = useState([])
  const [counter, setCounter] = useState(0)
  const [showCoplete, setShowCoplete ] = useState(false)

   const craetNewTask = (taskName)=>{
       const repeatTask = taskItems.find(item=>item.name===taskName) 
       if (!repeatTask) {
        setTaskItem([...taskItems,{name:taskName, done:false, counter:counter + 1}])
       }
        return;
   }

   const clearTask = ()=>{
       const doneTask = taskItems.find(item=>item.done===true)
       if (doneTask) {
         if (window.confirm('Are you sure you want to delete it?')) {
            const newTask = taskItems.filter(item=>item.done!==true)
            setTaskItem(newTask)
            setShowCoplete(false)
         }
       }
   }

   const counterTasks = () =>{
     const TasksUnsolved =  taskItems.filter(item=>item.done===false)
      setCounter(TasksUnsolved.length)
 }

// *** Lo ejecutamos cuando se monte el componeten *** //

   useEffect(() => {
    let data = localStorage.getItem('task')
       if(data){
          console.log(data)
          setTaskItem(JSON.parse(data))
          counterTasks()
       }
   }, [])

  // *** Lo ejecutamos con cambio del estado *** //
    
     useEffect(() => {
      counterTasks()
      localStorage.setItem('task',JSON.stringify(taskItems))
     }, [taskItems])

  

    const updateTask = task => {
       let update = taskItems.map(item=>item.name===task.name?{...item,done:!item.done}:item)
       setTaskItem(update)
    } 
     
  return (
    <div className='App' >
        <nav> 
        <h1>App Tasks <span>({counter} Unsolved tasks)</span></h1>
        </nav>
         <div className="conten">
         <CreateTask craetNewTask={craetNewTask} />
        <TaskTable 
         taskItems={taskItems} 
         updateTask={updateTask}
         showCoplete={false}
         />
         <VisibilityControl 
         setShowCoplete={setShowCoplete} 
         showCoplete={showCoplete}
         clearTask={clearTask}
         />
        { showCoplete &&  
        <TaskTable taskItems={taskItems} 
        updateTask={updateTask} 
        showCoplete={showCoplete} />  }
         </div>
    </div>
  );
}

export default App;
