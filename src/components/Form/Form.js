import React from 'react';
import './Form.css';

function Form({onAddTask,error}) {
  const [task, setTask] = React.useState('');
  //const [error, setError] = React.useState('');

  function handleChange(e){
    setTask(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault();
  onAddTask(task);
  setTask('')
}

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        id="task"
        name="task"
        className="form__input"
        type="text"
        placeholder="What needs to be done?"
        value={task || ''}
        onChange={handleChange} />
        <span className="form__error">{error}</span>
    </form>
  );
}

export default Form;
