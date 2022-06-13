import Main from '../Main/Main';
import React from 'react';
import tasksData from '../../utils/tasksData'

function App() {
  const [tasks, setTasks] = React.useState(tasksData);
  const [tasksFiltered, setTasksFiltered] = React.useState([]);
  const [unfinishedTasks, setUnfinishedTasks] = React.useState(0);
  const [buttonActiveAllTasks, setButtonActiveAllTasks] = React.useState(true);
  const [buttonActiveTasksActive, setButtonActiveTasksActive] = React.useState(false);
  const [buttonActiveCompleted, setButtonActiveCompleted] = React.useState(false);
  const [isDeleteTask, setIsDeleteTask] = React.useState(false);

  function createNewTask(newTask) {
    const newTaskObj = {
      id: Math.random().toString(36).slice(2),
      task: newTask,
      checked: false
    };
    return newTaskObj;
  }

  function handleAddTask(newTask) {
    const newTaskObj = createNewTask(newTask);

    if (newTask) {
      setTasks([...tasks, newTaskObj]);
      const tasksRemaining = handleOutstandingTasks(tasks);
      setUnfinishedTasks(tasksRemaining.length + 1)
    } else if (buttonActiveTasksActive) {
      setTasks([...tasks, newTaskObj]);
      setTasksFiltered([...tasksFiltered, newTaskObj]);
    }

    setIsDeleteTask(false);
  }

  function toggleStateCheckbox(taskMark) {
    const res = tasks.map((task) => (task.id === taskMark) ? { ...task, checked: !task.checked } : { ...task });
    console.log(res);
    return res;
  }

  function handleToggleCheckbox(taskMark) {
    const tasksComplete = toggleStateCheckbox(taskMark);
    setTasks(tasksComplete);
    const tasksRemaining = handleOutstandingTasks(tasksComplete);
    setUnfinishedTasks(tasksRemaining.length);

    if (buttonActiveTasksActive) {
      const tasksActive = tasksComplete.filter((task) => task.checked === false);
      setTasks(tasksComplete);
      setTasksFiltered(tasksActive);
    }

    if (buttonActiveCompleted) {
      const tasksActive = tasksComplete.filter((task) => task.checked === true);
      setTasks(tasksComplete);
      setTasksFiltered(tasksActive);
    }

    setIsDeleteTask(false);
  }

  function handleOutstandingTasks(list) {
    return list.filter((task) => task.checked === false ? task : '');
  }

  function visibleAllTasks() {
    setButtonActiveTasksActive(false);
    setButtonActiveCompleted(false);
    setButtonActiveAllTasks(true);
    const tasksAll = tasks.filter((task) => task.checked === false && task.checked === false ? task : '');
    setTasksFiltered(tasksAll);
    setIsDeleteTask(false);
  }

  function visibleActiveTasks() {
    setButtonActiveAllTasks(false);
    setButtonActiveCompleted(false);
    setButtonActiveTasksActive(true);
    const tasksActive = handleOutstandingTasks(tasks);
    setTasksFiltered(tasksActive);
    setIsDeleteTask(false);
  }

  function filteredTasks(list, state) {
    const tasks = list.filter(((task) => task.checked !== state));
    return tasks;
  }

  function visibleCompletedTasks() {
    setButtonActiveAllTasks(false);
    setButtonActiveTasksActive(false);
    setButtonActiveCompleted(true);
    const tasksCompleted = filteredTasks(tasks, false);
    setTasksFiltered(tasksCompleted);
    setIsDeleteTask(false);
  }

  function deleteCompletedTasks() {
    const tasksCompletedDeleteAll = filteredTasks(tasks, true);
    setTasks(tasksCompletedDeleteAll);

    if (!buttonActiveTasksActive) {
      const tasksCompletedDeleteFiltered = filteredTasks(tasksCompletedDeleteAll, false);
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
