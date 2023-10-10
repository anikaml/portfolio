import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

function setup() {
  return render(
    <ContactForm />
  );
}

describe('Contact Form components', () => {
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