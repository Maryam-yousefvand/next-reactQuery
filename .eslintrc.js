module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    // 'react/react-in-jsx-scope': 0,
    // 'react/jsx-filename-extension': 0,
    // 'react/prop-types': 0,
    // 'react/jsx-props-no-spreading': 0,
    // 'linebreak-style': 0,

    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'linebreak-style': 0,

    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'jsx-a11y/click-events-have-key-events': '0',
  },
};
