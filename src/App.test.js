import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

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
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('Button turns gray when disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: red');

  fireEvent.click(button); // button turns from red to blue
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox); // button should change from grey back to blue
  expect(button).toHaveStyle('background-color: blue');
});

describe('Spaces before camelCase letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});