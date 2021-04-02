import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

function setup() {
  return render(
    <App/>
  );
}

describe('Contact Form components', () => {
  test('Checks if there is Submit button on the page', () => {
    setup()
    const button = screen.getByRole('button', {name: /Submit/i})
    expect(button).toBeInTheDocument();
  })

  test('Checks if there are email and message form fields on the page', () => {
    setup()
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  })
});