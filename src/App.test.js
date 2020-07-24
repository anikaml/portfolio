import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Architectural Designer text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Architectural Designer/i);
  expect(textElement).toBeInTheDocument();
});
