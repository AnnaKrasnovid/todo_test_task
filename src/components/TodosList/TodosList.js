import './TodosList.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';

function TodosList({ toggleCheckbox, buttonActiveAllTasks, onChangeCheckbox }) {
  //useSelector принимает функцию,которая принимает store
  const todos = (useSelector(state => state.todos.todos));
  const filterTodos = (useSelector(state => state.todos.filterTodos));
  const taskToRender = buttonActiveAllTasks ? todos : filterTodos;

  return (
    <ul className="todos-list">
      {taskToRender.map((task) =>
        <Task
          key={task.id}
          toggleCheckbox={toggleCheckbox}
          onChangeCheckbox={onChangeCheckbox}
          {...task}
        />
      )}
    </ul>
  );
}

export default TodosList;
