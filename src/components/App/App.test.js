import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders App', () => {
  it('renders title', () => {
    render(<App />);
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
  }),

  it('renders list', () => {
    render(<App />);
    expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();
    expect(screen.getByText(/Покрыть все тестами/i)).toBeInTheDocument();
    expect(screen.getByText(/Сделать тестовое/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  }),

  it('renders button', () => {
    render(<App />);
    expect(screen.getByText(/all/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
  })
});
