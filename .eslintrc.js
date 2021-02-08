module.exports = {
	"root" : true,
	"env" : {
		"browser" : true,
		"node" : true,
	},
	// "parser" : "vue-eslint-parser",
	"extends" : [
		"@nuxtjs/eslint-config-typescript",
		"plugin:nuxt/recommended",
	],
	// "parserOptions" : {
	// 	"sourceType" : "module",
	// 	"ecmaVersion" : 2020,
	// 	"parser" : "babel-eslint",
	// },
	"plugins" : [
		"@typescript-eslint",
	],
	// add your custom rules here
	"rules" : {
		"@typescript-eslint/indent" : [
			"warn",
			"tab",
			{
				"FunctionDeclaration" : {
					"body" : 1,
				},
				"FunctionExpression" : {
					"body" : 1,
				},
				"SwitchCase" : 1,
			},
		],
		"@typescript-eslint/type-annotation-spacing" : [
			"error",
			{
				"after" : true,
				"before" : true,
			},
		],
		"arrow-parens" : [
			"error",
			"always",
		],
		"brace-style" : [
			"error",
			"stroustrup",
		],
		"camelcase" : "off",
		"comma-dangle" : [
			"error",
			"always",
		],
		"indent" : [
			"warn",
			"tab",
			{
				"FunctionDeclaration" : {
					"body" : 1,
				},
				"FunctionExpression" : {
					"body" : 1,
				},
				"SwitchCase" : 1,
			},
		],
		"key-spacing" : [
			"error",
			{
				"beforeColon" : true,
			},
		],
		"no-case-declarations" : "off",
		"no-tabs" : "off",
		"no-trailing-spaces" : "error",
		"quotes" : [
			"warn",
			"double",
			{ "allowTemplateLiterals" : true, },
		],
		"quote-props" : [
			"error",
			"always",
		],
		"semi" : [
			"error",
			"always",
		],
		"space-before-function-paren" : [
			"error",
			"always",
		],
		"vue/html-indent" : [
			"error",
			"tab",
			{
				"attribute" : 1,
				"baseIndent" : 1,
				"closeBracket" : 0,
				"alignAttributesVertically" : true,
				"ignores" : [],
			},
		],
		"vue/html-self-closing" : "off",
		"vue/max-attributes-per-line" : [
			"error",
			{
				"singleline" : 1,
				"multiline" : {
					"max" : 1,
					"allowFirstLine" : false,
				},
			},
		],
	},
	"overrides" : [
		{
			"files" : [
				"*.vue",
			],
			"rules" : {
				"vue/script-indent" : [
					"warn",
					"tab",
				],
			},
		},
	],
};
