import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../../pages';
import Layout from '../layout'

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
    render(<Layout><App /></Layout>);
    const textElement = screen.getByText(/Frontend Software Engineer/i);
    expect(textElement).toBeInTheDocument();
  });

  it('Checks if there are links on landing page', () => {
    render(<Layout><App /></Layout>);
    const expected_links = [
      '/#projects',
      '/about',
      '/#contact',
      '/projects/f1app',
      '/projects/stalue',
      '/projects/bokiem',
      '/projects/datette',
      '/projects/pineyTrails',
      'https://github.com/anikaml',
      'https://linkedin.com/in/anika-mlodzianowski'
    ]
    const rendered_links = screen.getAllByRole('link', { queryFallbacks: true, hidden: true }).map(link => {
      return link.getAttribute('href')
    })
    expected_links.map(link => expect(rendered_links).toContain(link))
  })
});
