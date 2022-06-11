import Main from '../Main/Main';
import React from 'react';

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [error, setError] = React.useState('');
  const [unfinishedTasks, setUnfinishedTasks] = React.useState(0);

  function handleAddTask(newTask) {
    if (newTask) {
      const newTaskObj = {
        id: Math.random().toString(36).slice(2),
        task: newTask,
        checked: false
      }
      setTasks([...tasks, newTaskObj]);
      handleOutstandingTasks(1, tasks)
      setError('');
    } else {
      setError('The field cannot be empty');
    }
  }

  function handleDeleteTask() {

  }

  function toggleCheckbox(taskMark) {
    console.log(taskMark);
    const taskComplete = tasks.map((task) => (task.id === taskMark) ? {...task, checked: !task.checked} : {...task});
    setTasks(taskComplete);
    handleOutstandingTasks(0, taskComplete)
  }

  function handleOutstandingTasks(number, list) {
    const tasksRemaining = list.filter((task) => task.checked === false ? task : '');
    setUnfinishedTasks(tasksRemaining.length + number)
  }

  return (
    <Main
      onAddTask={handleAddTask}
      tasks={tasks}
      onDeleteTask={handleDeleteTask}
      toggleCheckbox={toggleCheckbox}
      error={error}
      unfinishedTasks={unfinishedTasks}
    />
  );
}

export default App;
