import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders web designer text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/web designer/i);
  expect(textElement).toBeInTheDocument();
});
