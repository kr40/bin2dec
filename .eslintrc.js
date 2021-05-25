module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'google', 'plugin:import/recommended', 'prettier'],
	plugins: ['import'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'require-jsdoc': 'off',
		'no-unused-vars': 'warn',
	},
};
