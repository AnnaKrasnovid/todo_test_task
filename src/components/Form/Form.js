import React from 'react';
import './Form.css';

function Form({ onAddTask }) {
  const [task, setTask] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(e) {
    setTask(e.target.value);

    if(e.target.value < 1) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(task);
    setTask('');
  }

  return (
    <form className="form" onSubmit={handleSubmit} data-testid='submit-elem'>
      <input
        id="task"
        name="task"
        className="form__input"
        type="text"
        placeholder="What needs to be done?"
        minLength='1'
        value={task || ''}
        onChange={handleChange}
        data-testid='value-elem'
        />
      <span className="form__error">{isValid ? 'The field cannot be empty' : ''}</span>
    </form>
  );
}

export default Form;
