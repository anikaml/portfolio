// https://www.thetopsites.net/article/58651649.shtml
// Mock IntersectionObserver for unit tests to work
global.IntersectionObserver = class IntersectionObserver {
  constructor() { }

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }
};
global.ResizeObserver = require('resize-observer-polyfill')

// needed for motion.svg https://github.com/framer/motion/issues/204
if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}