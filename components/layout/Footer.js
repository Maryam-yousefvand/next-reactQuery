import Image from 'next/image';
import React from 'react';
import { Text } from '@chakra-ui/react';

function Footer() {
	return (
		<Text as="footer" bg="bgGray" textAlign="center" py="3rem">
			<Image src='/images/meal_khuj_logo_primary.png' width="200px" 
					height="100px" />
			<Text as="p" fontSize="1.2rem" color="text">
				Find the perfect meal recipe for you
			</Text>
			<Text as="p" fontSize="1.4rem" color="text" mt="1.2rem">
				© “My-Meals” 2022 All right reserved.
			</Text>
		</Text>
	);
}

export default Footer;
