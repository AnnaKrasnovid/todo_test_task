import './Main.css';
import Form from '../Form/Form';
import TodosList from '../TodosList/TodosList';

function Main() {
  return (
    <section className="main">
      <h1 className="main__title">todos</h1>
      <div className="main__container">
        <Form />
        <TodosList />
        <div className="main__block">
          <div className="main__box-state">
            <button className="main__button main__button_active" type='button'>All</button>
            <button className="main__button" type='button'>Active</button>
            <button className="main__button" type='button'>Completed</button>
          </div>
          <div className="main__box">
            <p className="main__state">2 items left</p>
            <div className="main__box-delete">
              <p className="main__state main__state_type_delete">Clear completed</p>
              <span className="main__info">Done</span>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
}

export default Main;
