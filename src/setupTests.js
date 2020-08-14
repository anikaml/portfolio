// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// https://www.thetopsites.net/article/58651649.shtml
// Mock IntersectionObserver for unit tests to work
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }
};