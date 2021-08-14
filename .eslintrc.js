module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	ignorePatterns: ['*.test.js', '*.test.tsx'],

	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', 'src/'],
			},
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-use-before-define': 'off',
    "@typescript-eslint/no-unused-vars": [
      2,
      {
          "args": "none"
      }
    ],
    'camelcase': 'off',
    'react/require-default-props': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'react/react-in-jsx-scope': 'off',
	},
};
