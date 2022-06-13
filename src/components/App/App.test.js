import { render, screen } from '@testing-library/react';
import App from './App';

//import { toggleStateCheckbox, tasks, handleOutstandingTasks, filteredTasks }  from './App';


it('renders todos', () => {
  render(<App />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});

it('toggleStateCheckbox переключает состояние чекбокса', () => {

  expect(toggleStateCheckbox('zm7tzh08aam')).toBe([
    {
      id: '5o992iht1hb',
      task: 'Сделать тестовое',
      checked: false
    },
    {
      id: 'zm7tzh08aam',
      task: 'Прекрасный код',
      checked: false
    },
    {
      id: 'v6cze5l2qeo',
      task: 'Покрыть все тестами',
      checked: false
    }
  ]);
});
