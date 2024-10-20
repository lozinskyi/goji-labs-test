module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-explicit-any': 2,
    'prettier/prettier': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'keyword-spacing': 0,
    'react/no-string-refs': 0,
    'react/no-unstable-nested-components': 0,
    'react/react-in-jsx-scope': 0,
  },
};
