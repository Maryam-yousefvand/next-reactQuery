import { Text } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function Layouts({ children }) {
	return (
		<Text as="div" maxW="1000px" margin="0 auto" padding="0 px">
			<NavBar />
			{children}
			<Footer />
		</Text>
	);
}

export default Layouts;
