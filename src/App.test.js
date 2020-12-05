import { render, screen } from '@testing-library/react';
import App from '../src/25 + 5 Clock/Clock';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
