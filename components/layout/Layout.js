import { Box, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';


function Layouts({ children }) {
	const Footer = dynamic(()=> import('@components/layout/Footer'))
	const NavBar = dynamic(() => import('@components/layout/NavBar'))
	return (
		<Text as="div" w="100%" margin="0 auto" >
			<NavBar />
			<Box px="5vw">
			{children}
			</Box>
			<Footer />
		</Text>
	);
}

export default Layouts;
