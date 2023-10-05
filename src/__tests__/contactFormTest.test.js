import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../App';

function setup() {
  return render(
    <App />
  );
}

describe('Contact Form components', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('Checks if there is Submit button on the page', () => {
    setup()
    const button = screen.getByLabelText('Submit')
    expect(button).toBeInTheDocument();
  })

  it('Checks if there are email and message form fields on the page', () => {
    setup()
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  })
});