import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  it('input event', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    userEvent.type(input, 'Тест');
    expect(screen.queryByTestId('value-elem')).toContainHTML('Тест');
  }),

  it('keyUp event', () => {
    render(<Form />);
    const form = screen.queryByTestId('submit-elem');
    expect(screen.queryByTestId('submit-elem'));
    fireEvent.keyPress(form);
    expect(screen.queryByTestId('value-elem'));
  }),

  it('Error element: not to be in the component by default', () => {
    render(<Form />);
    expect(screen.queryByText('The field cannot be empty')).not.toBeInTheDocument();
  })
})

