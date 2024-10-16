module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['warn'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-duplicate-imports': 'error',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react-native/no-inline-styles': 'off',
        'react/no-unstable-nested-components': 'off',
        'react/self-closing-comp': 'off',
        'react/react-in-jsx-scope': 'off',
        // 'prettier/prettier': [
        //   'error',
        //   {},
        //   {
        //     usePrettierrc: true,
        //   },
        // ],
      },
    },
  ],
};
