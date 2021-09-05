import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Changes button background colour and text on click', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle('background-color: red');

  fireEvent.click(button);

  expect(button).toHaveStyle('background-color: blue');
  expect(button.textContent).toBe('Change to red');
});

test('Initial conditions', () => {
  render(<App />);
  // button is enabled by default
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toBeEnabled();
  // checkbox is not checked by default
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox enables and disables the button', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
