import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders button with a red background and text of "Change to blue"', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle('background-color: red');
});
