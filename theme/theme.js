import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: '#1f2023',
				color: 'white',
			},
			a: {
				textDecoration: 'none',
				color: 'inherit',
			},
		},
	},
});

export default theme;
