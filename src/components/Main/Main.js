import './Main.css';
import Form from '../Form/Form';
import TodosList from '../TodosList/TodosList';

function Main({
  onAddTask,
  tasks,
  error,
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
          error={error}
        />
        <TodosList
          tasks={tasks}
          toggleCheckbox={toggleCheckbox}
          tasksFiltered={tasksFiltered}
          buttonActiveAllTasks={buttonActiveAllTasks}
        />
        <div className="main__block">
          <div className="main__box-state">
            <button
              className={`main__button ${buttonActiveAllTasks ? "main__button_active" : ''}`}
              type='button'
              onClick={onAllTask}>
              All
            </button>

            <button
              className={`main__button ${buttonActiveTasksActive ? "main__button_active" : ''}`}
              type="button"
              onClick={onActiveTasks}>
              Active
            </button>

            <button
              className={`main__button ${buttonActiveCompleted ? "main__button_active" : ''}`}
              type="button"
              onClick={onCompletedTasks}>
              Completed
            </button>
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
