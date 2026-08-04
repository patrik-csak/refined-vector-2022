import remarkSmartypants from 'remark-smartypants';

/**
 https://github.com/remarkjs/remark/tree/remark-cli%4012.0.1/packages/remark-cli#example-config-files-json-yaml-js
 https://github.com/unifiedjs/unified-engine/tree/11.0.1#implicit-configuration
 @type {import('unified').Preset}
 */
const config = {
	plugins: [remarkSmartypants],
	settings: {
		bullet: '-',
	},
};

export default config;
