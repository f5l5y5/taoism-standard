module.exports = {
	customSyntax: 'postcss-html',
	extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: {
		'no-descending-specificity': null,
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep']
			}
		],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['deep']
			}
		],
		// 新增
		'font-family-no-missing-generic-family-keyword': null,
		'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'extend', 'content', 'include'] }]
	}
}
