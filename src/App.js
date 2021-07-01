import React, { useState } from 'react';
import Todo from './Todo';
import Form from './Form';
import FilterButton from './FilterButton';
import { nanoid } from "nanoid";
// import ProgressDIY from './ProgressDIY';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  
  function toggleTaskCompleted(id){
    const updateTask = tasks.map(task => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updateTask)//to update our state
  }

  function deleteTask(id){
    // console.log(id)
    const remainTask = tasks.filter(task => id !== task.id)
    setTasks(remainTask)
  }

  const taskList = tasks.map(task => //pass props.tasks into the useState()
  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted}
  deleteTask={deleteTask}  />
  )

  function addTask(name) {
    alert(name)//callback props
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);//first,copy the existing array, then add our new task object
  }

  const tasknum = taskList.length !== 1 ? 'tasks': 'task'
  const headingText = `${taskList.length} ${tasknum} remaining`;


  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}



export default App;
