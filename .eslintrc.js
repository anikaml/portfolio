module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:cypress/recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": '@babel/eslint-parser',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": true,
        "requireConfigFile": false,
        "babelOptions": {
            "presets": ["@babel/preset-react"]
        },
    },
    "plugins": [
        "cypress",
        "react"
    ],
    "rules": {
        "no-console": 0,
        "no-unused-vars": 0
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "overrides": [
        {
            "files": ["cypress/**"]
        },
        {
            "files": [
                "**/*.test.js",
                "**/*.test.jsx"
            ],
            "env": {
                "jest": true
            }
        }
    ]
};