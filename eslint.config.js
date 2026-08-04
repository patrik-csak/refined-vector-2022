import {defineConfig, globalIgnores} from 'eslint/config';
import xo from 'eslint-config-xo';

export default defineConfig([
	globalIgnores(['package-lock.json']),

	...xo({prettier: 'compat'}),

	{
		rules: {
			'css/font-family-fallbacks': 'off',
		},
	},
]);
