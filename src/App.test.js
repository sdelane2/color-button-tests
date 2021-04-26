import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct inital color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "Change to blue"});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "Change to blue"})
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()
});

test('when checkbox is checked', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: "Disable button"});
  const colorButton = screen.getByRole('button');
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();

});

test('button is gray when disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: "Disable button"});
  const colorButton = screen.getByRole('button');
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: "gray"});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: "red"});

});

test('clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: "Disable button"});
  const colorButton = screen.getByRole('button');
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: "gray"});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

});

// test('button turns blue when clicked', () => {
//   render(<App />);
//   const colorButton = screen.getByRole('button', { name: 'Change to blue'});

// });