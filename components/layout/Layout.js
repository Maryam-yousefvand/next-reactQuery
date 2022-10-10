import { Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';


function Layouts({ children }) {
	const Footer = dynamic(()=> import('@components/layout/Footer'))
	const NavBar = dynamic(() => import('@components/layout/NavBar'))
	return (
		<Text as="div" maxW="1000px" margin="0 auto" padding="0 px">
			<NavBar />
			{children}
			<Footer />
		</Text>
	);
}

export default Layouts;
