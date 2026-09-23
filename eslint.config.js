import {defineConfig} from 'eslint/config';
import xo from 'eslint-config-xo';

export default defineConfig([
	...xo(),

	{
		rules: {
			'css/font-family-fallbacks': 'off',
		},
	},
]);
