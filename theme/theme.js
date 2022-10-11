import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	colors : {	
	// Text colors 	
     text:"#717171",
	 textLight:"#9f9f9f",
	 primaryText:'#e85d04',

	//  bg colors
	 bgGray:"#313235",
	 bgPrimary:"#e85d04",
	 bgBox:"#393b40",


    // button bg-color
	 btn :{
		gray:"#313235",
		primary:"#e85d04",
		cornsilk:"#FFF8DC",
		Blanched:"#FFDEAD"

	 },
	 border:{
        primary:"#e85d04",

	 }

	},
	styles: {
		global: {
			// styles for the `body`
			body: {
				// bg: '#1f2023',
				// color: 'white'
			},
			a: {
				textDecoration: 'none',
				color: 'inherit',
			},
		},
	},
});

export default theme;
