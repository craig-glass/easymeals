import { render, screen } from '@testing-library/react';
import App from './App';

test('renders this link', () => {
  render(<App />);
  const linkElement = screen.getByText('This');
  expect(linkElement).toBeInTheDocument();
});

test('renders that link', () => {
  render(<App />);
  const linkElement = screen.getByText('That');
  expect(linkElement).toBeInTheDocument();
});

test('renders logo link', () => {
  render(<App />);
  const linkElement = screen.getByText('Logo');
  expect(linkElement).toBeInTheDocument();
});

test('renders a home link', () => {
  render(<App />);
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});