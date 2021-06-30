import React, { useState } from 'react';
import Todo from './Todo';
import Form from './Form';
import FilterButton from './FilterButton';
import { nanoid } from "nanoid";
// import ProgressDIY from './ProgressDIY';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => //pass props.tasks into the useState()
  <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}  />
  )

  function addTask(name) {
    alert(name)//callback props
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);//first,copy the existing array, then add our new task object
  }

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
        3 tasks remaining
      </h2>
      <ul role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        { taskList }
      </ul>
    </div>
  );
}



export default App;
