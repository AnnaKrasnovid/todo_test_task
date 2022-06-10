function Task({task, key}) {
  return (
      <li className="task" key={key}>
        <input type="checkbox" name="task__checkbox" id="checkbox" value={task} />
        <label className="task__label" htmlFor="non-stop-flights">{task}</label>
      </li>
  );
}

export default Task;
