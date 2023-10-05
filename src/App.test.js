import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import App from './App';

describe('Application', () => {
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

  it('renders web designer text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Frontend Software Engineer/i);
    expect(textElement).toBeInTheDocument();
  });
});