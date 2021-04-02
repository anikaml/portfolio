import React from 'react';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from "react-router-dom"; //Using MemoryRouter or a custom history is recommended in order to be able to reset the router between tests.
import App from '../App';

function setup() {
  return render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );
}

describe('Links', () => {
  test('Checks if there are links on landing page', () => {
    setup()
    const expected_links = [
      '/#projects',
      '/about',
      '/#contact',
      '/f1app',
      '/stalue',
      '/bokiem',
      '/datette',
      'https://github.com/anikaniescierewicz',
      'https://linkedin.com/in/anika-mlodzianowski'
    ]
    const rendered_links = screen.getAllByRole('link', {queryFallbacks: true, hidden: true}).map(link => {
      return link.getAttribute('href')
    })
    expected_links.map(link => expect(rendered_links).toContain(link))
  })
});