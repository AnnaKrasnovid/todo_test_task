import { createSlice } from '@reduxjs/toolkit';
import tasksData from '../utils/tasksData';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [...tasksData],
    filterTodos: [],
    numberTask: 0,
  },
  reducers: {
    addTodo(state, action) {
      const { task, buttonActiveTasksActive, buttonActiveCompleted } = action.payload;

      state.todos.push({
        id: Math.random().toString(36).slice(2),
        task: task,
        checked: false,
      });

      if(buttonActiveTasksActive) {
        state.filterTodos = state.todos.filter(task => task.checked === false);
      }
      if(buttonActiveCompleted) {
        state.filterTodos = state.todos.filter(task => task.checked === true);
      }
    },

    removeTodo(state) {
      state.todos = state.todos.filter(task => task.checked !== true);
      //state.filterTodos = state.filterTodos.filter(task => task.checked !== true);
    },

    toggleTodoComplete(state, action) {
      const { id, buttonActiveTasksActive, buttonActiveCompleted, buttonActiveAllTasks } = action.payload;

      const toggledTodo = state.todos.find(todo => todo.id === id);
      toggledTodo.checked = !toggledTodo.checked;

      if (buttonActiveAllTasks) {
        state.todos = state.todos;
      }
      if (buttonActiveTasksActive) {
        state.filterTodos = state.todos.filter(task => task.checked !== true);
      }
      if (buttonActiveCompleted) {
        state.filterTodos = state.todos.filter(task => task.checked !== false);
      }
    },

    filteredAll(state) {
      state.filterTodos = state.todos;
    },

    filteredActive(state) {
      state.filterTodos = state.todos.filter(task => task.checked === false);
    },

    filteredCompleted(state) {
      state.filterTodos = state.todos.filter(task => task.checked === true);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodoComplete,
  filteredAll,
  filteredActive,
  filteredCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
