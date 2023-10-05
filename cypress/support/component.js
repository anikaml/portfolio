// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Ensure global app styles are loaded:
import '../../src/index.css';

import { mount } from 'cypress/react'

Cypress.Commands.add('mount', mount)