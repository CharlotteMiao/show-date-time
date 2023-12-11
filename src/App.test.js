import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Start Date', () => {
  render(<App />);
  const linkElement = screen.getByText(/Start Date/i);
  expect(linkElement).toBeInTheDocument();
});
