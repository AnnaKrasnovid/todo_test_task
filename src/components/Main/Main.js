import './Main.css';
import Form from '../Form/Form';
import TodosList from '../TodosList/TodosList';
import FilteredButton from '../FilteredButton/FilteredButton';

function Main(
  {
    onAddTask,
    tasks,
    toggleCheckbox,
    unfinishedTasks,
    onAllTask,
    onActiveTasks,
    onCompletedTasks,
    buttonActiveAllTasks,
    buttonActiveTasksActive,
    tasksFiltered,
    buttonActiveCompleted,
    onDeleteTasks,
    isDeleteTask
  }) {

  return (
    <section className="main">
      <h1 className="main__title">todos</h1>
      <div className="main__container">
        <Form
          onAddTask={onAddTask}
        />
        <TodosList
          tasks={tasks}
          toggleCheckbox={toggleCheckbox}
          tasksFiltered={tasksFiltered}
          buttonActiveAllTasks={buttonActiveAllTasks}
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
            <p className="main__state">{unfinishedTasks} items left</p>
            <div className="main__box-delete">
              <button
                className="main__button-delete"
                type="button"
                onClick={onDeleteTasks}>
                Clear completed
              </button>
              <span className={isDeleteTask ? "main__info" : ''}>Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
