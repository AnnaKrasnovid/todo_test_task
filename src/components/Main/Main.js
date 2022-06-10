import './Main.css';
import Form from '../Form/Form';
import TodosList from '../TodosList/TodosList';

function Main({onAddTask, tasks, error}) {
  return (
    <section className="main">
      <h1 className="main__title">todos</h1>
      <div className="main__container">
        <Form onAddTask={onAddTask} error={error} />
        <TodosList task={tasks} />
        <div className="main__block">
          <div className="main__box-state">
            <button className="main__button main__button_active" type='button'>All</button>
            <button className="main__button" type="button">Active</button>
            <button className="main__button" type="button">Completed</button>
          </div>
          <div className="main__box">
            <p className="main__state">{tasks.length} items left</p>
            <div className="main__box-delete">
              <button className="main__button main__button_type_delete" type="button">Clear completed</button>
              <span className="main__info">Done</span>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
}

export default Main;
