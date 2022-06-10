import Main from '../Main/Main';
import React from 'react';
import todoDate from '../../utils/todoDate';

function App() {
const [tasks, setTasks] = React.useState([]);
const [error, setError] = React.useState('');

function handleAddTask(newTask) {

  if(newTask) {
    const newTaskObj = {
      id: Math.random().toString(36).slice(2),
      task: newTask,
      complete: false
    }
  setTasks([...tasks, newTaskObj])
  console.log(newTaskObj)
  console.log(tasks)
  console.log(tasks.length)
  setError('')
} else {
  setError('The field cannot be empty')
}
}

function handleDeleteTask() {

}

function toggleChecbox() {

}

  return (
    <Main
    onAddTask={handleAddTask} tasks={tasks}
    onDeleteTask={handleDeleteTask}
    stateChecbox={toggleChecbox}
    error={error}
    />
  );
}

export default App;
