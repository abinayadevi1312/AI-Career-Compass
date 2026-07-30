import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the AI Career Compass hero content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /ai career compass/i })).toBeInTheDocument();
  expect(screen.getByText(/discover roles, skills, and learning paths tailored to your background/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /explore roles/i })).toBeInTheDocument();
});
