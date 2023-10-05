import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../App';

function setup() {
  return render(
    <App />
  );
}

describe('Links', () => {
  it('Checks if there are links on landing page', () => {
    setup()
    const expected_links = [
      '/#projects',
      '/about',
      '/#contact',
      '/f1app',
      '/stalue',
      '/bokiem',
      '/datette',
      'https://github.com/anikaml',
      'https://linkedin.com/in/anika-mlodzianowski'
    ]
    const rendered_links = screen.getAllByRole('link', { queryFallbacks: true, hidden: true }).map(link => {
      return link.getAttribute('href')
    })
    expected_links.map(link => expect(rendered_links).toContain(link))
  })
});