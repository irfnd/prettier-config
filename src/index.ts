import { Config } from 'prettier';

const config = {
	endOfLine: 'lf',
	jsxSingleQuote: true,
	printWidth: 130,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	plugins: [require.resolve('prettier-plugin-organize-imports')],
} satisfies Config;

export default config;
