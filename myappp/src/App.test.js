import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
test('renders the AI Career Compass hero content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /ai career compass/i })).toBeInTheDocument();
  expect(screen.getByText(/discover roles, skills, and learning paths tailored to your background/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /explore roles/i })).toBeInTheDocument();
=======
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> 771052cf0d219e764ae3d9dedc98b44cf8188f90
});
