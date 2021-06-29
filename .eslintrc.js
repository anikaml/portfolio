module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:cypress/recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "cypress",
        "jest",
        "react"
    ],
    "rules": {
        "no-console": 0
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "overrides": [
      {
        "files": ["cypress/**"],
        "rules": {
          "jest/expect-expect": "off"
        }
      }
    ]
};