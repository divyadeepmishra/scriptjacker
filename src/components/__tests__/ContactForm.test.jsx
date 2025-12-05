import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

describe('ContactForm', () => {
  it('renders correctly', () => {
    render(<ContactForm />);
    expect(screen.getByText('Start a Secure Project')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });

  it('submits valid data', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Project Details/i), { target: { value: 'Need security audit.' } });

    const submitBtn = screen.getByRole('button', { name: /Send Message/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Message Sent/i)).toBeInTheDocument();
  });
});
