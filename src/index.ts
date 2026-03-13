import { Config } from 'prettier';

const config: Config = {
	endOfLine: 'lf',
	jsxSingleQuote: true,
	printWidth: 130,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	plugins: ["prettier-plugin-organize-imports"],
};

export default config;
