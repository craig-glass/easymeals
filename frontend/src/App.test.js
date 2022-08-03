import { render, screen } from '@testing-library/react';
import App from './App';

test('renders this link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this);
  expect(linkElement).toBeInTheDocument();
});
