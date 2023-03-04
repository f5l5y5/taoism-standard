module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'no-new': 'off',
		'no-shadow': 'off',
		'no-bitwise': 'off',
		'func-names': 'off',
		'no-console': 'off',
		'no-plusplus': 'off',
		'default-case': 'off',
		'prefer-template': 'off',
		'consistent-return': 'off',
		'no-param-reassign': 'off',
		'no-nested-ternary': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-expressions': 'off',
		'no-restricted-globals': 'off',
		'class-methods-use-this': 'off',
		'prefer-destructuring': ['error', { object: true, array: false }],
		// eslint-plugin-import
		'import/order': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',
		// eslint-plugin-vue
		'vue/no-v-html': 'off',
		'vue/attributes-order': 'off',
		'vue/require-v-for-key': 'off',
		'vue/require-default-prop': 'off',
		'vue/no-unused-components': 'off',
		'vue/return-in-computed-property': 'off',
		// typescript-eslint
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// 新增
		'import/no-dynamic-require': 'off'
	},
	overrides: [
		{
			files: ['*.vue'],
			parser: require.resolve('vue-eslint-parser')
		},
		{
			files: ['**/*.md/*.js', '**/*.md/*.ts'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'off'
			}
		}
	]
}
