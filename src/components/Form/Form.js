import React from 'react';
import './Form.css';

function Form(props) {
  const [task, setTask] = React.useState('');

  function handleChange(e){
    setTask(e.target.value)
}

function handleSubmit(e) {
  //e.preventDefault();
  props.onAddTask({
    task: task,
  });
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
        <span className="form__error">The field cannot be empty</span>
    </form>
  );
}

export default Form;
