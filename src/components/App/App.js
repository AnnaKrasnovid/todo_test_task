import Main from '../Main/Main';
import React from 'react';

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [tasksFiltered, setTasksFiltered] = React.useState([]);
  const [error, setError] = React.useState('');
  const [unfinishedTasks, setUnfinishedTasks] = React.useState(0);
  const [buttonActiveAllTasks, setButtonActiveAllTasks] = React.useState(true);
  const [buttonActiveTasksActive, setButtonActiveTasksActive] = React.useState(false);
  const [buttonActiveCompleted, setButtonActiveCompleted] = React.useState(false);
  const [isDeleteTask, setIsDeleteTask] = React.useState(false);

  function handleAddTask(newTask) {
    const newTaskObj = {
      id: Math.random().toString(36).slice(2),
      task: newTask,
      checked: false
    };

    if (newTask) {
      setTasks([...tasks, newTaskObj]);
      handleOutstandingTasks(1, tasks);
      setError('');
    } else if (buttonActiveTasksActive) {
      setTasks([...tasks, newTaskObj]);
      setTasksFiltered([...tasksFiltered, newTaskObj]);
    } else {
      setError('The field cannot be empty');
    }
    setIsDeleteTask(false);
  }

  function toggleStateCheckbox(taskMark) {
    return tasks.map((task) => (task.id === taskMark) ? {...task, checked: !task.checked} : {...task});
  }

  function handleToggleCheckbox(taskMark) {
    const tasksComplete = toggleStateCheckbox(taskMark);
    setTasks(tasksComplete);
    handleOutstandingTasks(0, tasksComplete);

    if(buttonActiveTasksActive) {
      const tasksActive = tasksComplete.filter(((task) => task.checked === false ));
      setTasks(tasksComplete);
      setTasksFiltered(tasksActive);
    }

    if(buttonActiveCompleted) {
      const tasksActive = tasksComplete.filter(((task) => task.checked === true ));
      setTasks(tasksComplete);
      setTasksFiltered(tasksActive);
    }
    setIsDeleteTask(false);
  }

  function handleOutstandingTasks(number, list) {
    const tasksRemaining = list.filter((task) => task.checked === false ? task : '');
    setUnfinishedTasks(tasksRemaining.length + number);
  }

  function visibleAllTasks() {
    setButtonActiveTasksActive(false);
    setButtonActiveCompleted(false);
    const tasksAll = tasks.filter(((task) => task.checked === false &&  task.checked === false ? task : ''));
    setTasksFiltered(tasksAll);
    setButtonActiveAllTasks(true);;
    setIsDeleteTask(false);
  }

  function visibleActiveTasks() {
    setButtonActiveAllTasks(false);
    setButtonActiveCompleted(false);
    const tasksActive = tasks.filter(((task) => task.checked === false ? task : ''));
    setTasksFiltered(tasksActive);
    setButtonActiveTasksActive(true);
    setIsDeleteTask(false);
  }

  function visibleCompletedTasks() {
    setButtonActiveAllTasks(false);
    setButtonActiveTasksActive(false);
    setButtonActiveCompleted(true);
    const tasksCompleted = tasks.filter(((task) => task.checked !== false ));
    setTasksFiltered(tasksCompleted);
    setIsDeleteTask(false);
  }

  function deleteCompletedTasks() {
    const tasksCompletedDeleteAll = tasks.filter(((task) => task.checked === false ));
    setTasks(tasksCompletedDeleteAll);

    if(!buttonActiveTasksActive) {
      const tasksCompletedDeleteFiltered = tasksCompletedDeleteAll.filter(((task) => task.checked !== false ));
      setTasksFiltered(tasksCompletedDeleteFiltered);
    }
    setIsDeleteTask(true);
  }

  return (
    <Main
      onAddTask={handleAddTask}
      tasks={tasks}
      tasksFiltered={tasksFiltered}
      toggleCheckbox={handleToggleCheckbox}
      error={error}
      unfinishedTasks={unfinishedTasks}
      onAllTask={visibleAllTasks}
      onActiveTasks={visibleActiveTasks}
      onCompletedTasks={visibleCompletedTasks}
      buttonActiveAllTasks={buttonActiveAllTasks}
      buttonActiveTasksActive={buttonActiveTasksActive}
      buttonActiveCompleted={buttonActiveCompleted}
      onDeleteTasks={deleteCompletedTasks}
      isDeleteTask={isDeleteTask}
    />
  );
}

export default App;