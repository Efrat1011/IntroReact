import { useEffect, useState } from "react";
import '../index.css'

function TaskBox(){
    // const [show, setShow] = useState(false)
  const [task, setTask] = useState()
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("Tasks")
    return savedTasks != null ? JSON.parse(savedTasks) : [{taskName: "Гүл суару", completed: true},{taskName: "Күнделікті үй тапсырмасын орындау", completed: false}]})
  const [filter, setFilter] = useState('all')
  function handleSubmit(e){
    e.preventDefault()
    setTasks([...tasks,{taskName: task, completed: false}])
    setTask('')
  }
    function handleClick(efrat){
     setTasks(
     tasks.map((task,i)=>(i===efrat?{...task, completed:!task.completed}:task)) 
    );
    
      setTasks(
        tasks.map((task, i) => {
            if (i === efrat) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        })
    );
    }
const handleRemove=(id)=>{
  setTasks(tasks.filter((task,index)=>index!=id))
}
const filtereredTasks = tasks.filter((tapsyrma,index)=>{
  if(filter ==="all"){
    return true
  }else if(filter === "complete"){
    return tapsyrma.completed
  }else if(filter === "incomplete"){
    return !tapsyrma.completed
  }
})
useEffect(()=>{
localStorage.setItem("Tasks",JSON.stringify(tasks))

},[tasks])
return(
<>
<div className="container">
  <form onSubmit={handleSubmit}>
    <input 
   type="text" value={task}  onChange={(e) => setTask(e.target.value)}/>
    <button  type="submit">Qosu</button>
  </form>
  <div className="filter-box">
    <button   onClick={()=> setFilter('all')}>ALL</button>
    <button  onClick={()=> setFilter('complete')}>COMPLETE</button>
    <button   onClick={() => setFilter('incomplete')}>INCOMPLETE</button>
  </div>
 
  <ul>
    {filtereredTasks.map((tapsyrma,index)=>{
      return <li key={index}>
                  {tapsyrma.taskName}
                  {tapsyrma.completed ? 
                  <button onClick={()=>handleClick(index)} style={{color:"green"}}>✅</button> 
                  : <button  onClick={()=>handleClick(index)}>❌</button>}

                  {<button  onClick={()=> handleRemove(index)}>🗑️</button>}
     
            </li>
    })}
  </ul>
</div>
 {/* <div>
    <button onClick={()=> setShow(!show)}>
      {show ? "🔽Jasyru" :"🔼 Kobirek korsetu"}
    </button>
    {show && <p>🌟 Bul kosymsha aqparat</p>}
    {!show && <p>🌟 Aqparat jasyryldy</p>}
   </div>  */}
</>
)
}
export default TaskBox