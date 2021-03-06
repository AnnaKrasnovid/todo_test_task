import React from 'react';
import { useSelector } from 'react-redux';
import './Main.css';
import Form from '../Form/Form';
import TodosList from '../TodosList/TodosList';
import FilteredButton from '../FilteredButton/FilteredButton';

function Main(
  {
    onAddTask,
    onAllTask,
    onActiveTasks,
    onCompletedTasks,
    buttonActiveAllTasks,
    buttonActiveTasksActive,
    buttonActiveCompleted,
    onDeleteTasks,
    isDeleteTask,
    onChangeCheckbox,
  }) {

  const numberTask = (useSelector(state => state.todos.numberTask));

  return (
    <section className="main">
      <h1 className="main__title">todos</h1>
      <div className="main__container">
        <Form
          onAddTask={onAddTask}
        />
        <TodosList
          buttonActiveAllTasks={buttonActiveAllTasks}
          onChangeCheckbox={onChangeCheckbox}
        />
        <div className="main__block">
          <div className="main__box-state">
            <FilteredButton
              isButtonActive={buttonActiveAllTasks}
              onButtonActive={onAllTask}
              title={'All'}
            />
            <FilteredButton
              isButtonActive={buttonActiveTasksActive}
              onButtonActive={onActiveTasks}
              title={'Active'}
            />
            <FilteredButton
              isButtonActive={buttonActiveCompleted}
              onButtonActive={onCompletedTasks}
              title={'Completed'}
            />
          </div>
          <div className="main__box">
            <p className="main__state">{numberTask} items left</p>
            <div className="main__box-delete">
              <button
                className="main__button-delete"
                type="button"
                onClick={onDeleteTasks}>
                Clear completed
              </button>
              <span className={isDeleteTask ? 'main__info' : ''}>Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
