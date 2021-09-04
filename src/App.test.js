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
