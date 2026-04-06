import {defineConfig} from 'eslint/config';
import packageJson from 'eslint-plugin-package-json';

export default defineConfig([
	packageJson.configs.recommended,
	packageJson.configs.stylistic,
	{
		rules: {
			'package-json/require-exports': 'off',
			'package-json/require-files': 'off',
			'package-json/require-sideEffects': 'off',
		},
	},
]);
