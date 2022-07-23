import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  filteredAll,
  filteredActive,
  filteredCompleted,
} from '../../store/todoSlice';
import Main from '../Main/Main';

function App() {
  const dispatch = useDispatch();

  //const [unfinishedTasks, setUnfinishedTasks] = React.useState(0);

  const [buttonActiveAllTasks, setButtonActiveAllTasks] = React.useState(true);
  const [buttonActiveTasksActive, setButtonActiveTasksActive] = React.useState(false);
  const [buttonActiveCompleted, setButtonActiveCompleted] = React.useState(false);

  const [isDeleteTask, setIsDeleteTask] = React.useState(false);

  function handleAddTask(task) {
    dispatch(addTodo({ task, buttonActiveTasksActive, buttonActiveCompleted}));
    setIsDeleteTask(false);
  }

  function handleToggleCheckbox(id) {
    dispatch(toggleTodoComplete({ id, buttonActiveTasksActive, buttonActiveCompleted, buttonActiveAllTasks }));
    setIsDeleteTask(false);
  }

  function visibleAllTasks() {
    dispatch(filteredAll());
    setButtonActiveTasksActive(false);
    setButtonActiveCompleted(false);
    setButtonActiveAllTasks(true);
    setIsDeleteTask(false);
  }

  function visibleActiveTasks() {
    dispatch(filteredActive());
    setButtonActiveAllTasks(false);
    setButtonActiveCompleted(false);
    setButtonActiveTasksActive(true);
    setIsDeleteTask(false);
  }

  function visibleCompletedTasks() {
    setIsDeleteTask(false);
    setButtonActiveAllTasks(false);
    setButtonActiveTasksActive(false);
    setButtonActiveCompleted(true);
    dispatch(filteredCompleted());
  }

  function deleteCompletedTasks() {
    dispatch(removeTodo());
    setIsDeleteTask(true);
  }

  return (
    <Main
      onAddTask={handleAddTask}
      //unfinishedTasks={unfinishedTasks}
      onAllTask={visibleAllTasks}
      onActiveTasks={visibleActiveTasks}
      onCompletedTasks={visibleCompletedTasks}
      buttonActiveAllTasks={buttonActiveAllTasks}
      buttonActiveTasksActive={buttonActiveTasksActive}
      buttonActiveCompleted={buttonActiveCompleted}
      onDeleteTasks={deleteCompletedTasks}
      isDeleteTask={isDeleteTask}
      onChangeCheckbox={handleToggleCheckbox}
    />
  );
}

export default App;
