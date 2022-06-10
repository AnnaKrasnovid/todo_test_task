import './TodosList.css';

function TodosList() {
  return (
    <ul className="todos-list">
      <li className="task">
        <input type="checkbox" name="task__checkbox" id="checkbox" value="non-stop-flights" />
        <label class="task__label" for="non-stop-flights">Non Stop Flights</label>
      </li>
      <li className="task">
        <input type="checkbox" name="task__checkbox" id="checkbox" value="non-stop-flights" />
        <label class="task__label" for="non-stop-flights">Non Stop Flights</label>
      </li>
      <li className="task">
        <input type="checkbox" name="task__checkbox" id="checkbox" value="non-stop-flights" />
        <label class="task__label" for="non-stop-flights">Non Stop Flights</label>
      </li>
    </ul>
  );
}

export default TodosList;
