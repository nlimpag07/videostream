import nextVitalsConfig from 'eslint-config-next/core-web-vitals';

const config = [
	...nextVitalsConfig,
	{
		ignores: ['.next/**', 'node_modules/**', '.vercel/**'],
	},
];

export default config;
