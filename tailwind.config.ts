import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				black: 'var(--black)',
				white: 'var(--white)',
				orange: 'var(--orange)',
				gray: 'var(--gray)',
				red: 'var(--red)',
			},

			fontFamily: {
				sans: ['var(--font-poppins)', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
}
export default config
