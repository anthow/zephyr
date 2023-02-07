import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert'

const config = {
	plugins: [sveltekit(),mkcert()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {

        https: true

    },
};

export default config;
