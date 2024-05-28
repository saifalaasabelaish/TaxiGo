import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
  test('renders App component and checks for registration form fields', () => {
    render(<App />);
    
    // Check for form labels (you can add more based on your actual UI elements)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  // Example of another test, checking for specific text in the App
  test('renders welcome message', () => {
    render(<App />);
    const welcomeText = screen.getByText(/welcome to taxigo/i); // Adjust text based on your app
    expect(welcomeText).toBeInTheDocument();
  });

  // Additional tests can be added here for other interactions and validations
});
