import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  it('renders the header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Nearby Messages App/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('displays nearby messages after form submission', async () => {
    render(<App />);

    // Mock the API response
    const mockApiResponse = [
      { message: 'Hello, nearby messages!' },
      { message: 'Testing nearby messages.' },
    ];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockApiResponse),
    });

    // Fill out and submit the form, including the range parameter
    userEvent.type(screen.getByLabelText(/Latitude:/), '37.7749');
    userEvent.type(screen.getByLabelText(/Longitude:/), '-122.4194');
    userEvent.type(screen.getByLabelText(/Range \(km\):/), '5'); // Example range
    userEvent.click(
      screen.getByRole('button', { name: /Search Nearby Messages/i })
    );

    // Wait for messages to display
    const message1 = await screen.findByText(/Hello, nearby messages!/i);
    const message2 = await screen.findByText(/Testing nearby messages./i);

    expect(message1).toBeInTheDocument();
    expect(message2).toBeInTheDocument();
  });

  it('handles form submission error', async () => {
    render(<App />);

    // Mock the API response to simulate an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));

    // Fill out and submit the form
    userEvent.type(screen.getByLabelText(/Latitude:/), '37.7749');
    userEvent.type(screen.getByLabelText(/Longitude:/), '-122.4194');
    userEvent.click(
      screen.getByRole('button', { name: /Search Nearby Messages/i })
    );

    // Wait for error message to display
    const errorMessage = await screen.findByText(
      /Error fetching nearby messages:/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
