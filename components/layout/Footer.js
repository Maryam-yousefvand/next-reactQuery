import Image from 'next/image';
import React from 'react';
import Logo from '../../images/meal_khuj_logo_primary.png';
import { Text } from '@chakra-ui/react';

function Footer() {
	return (
		<Text as="footer" bg="#313235" textAlign="center" py="3rem">
			<Image src={Logo} />
			<Text as="p" fontSize="1.2rem" color="#717171">
				Find the perfect meal recipe for you
			</Text>
			<Text as="p" fontSize="1.4rem" color="#717171" mt="1.2rem">
				© “My-Meals” 2022 All right reserved.
			</Text>
		</Text>
	);
}

export default Footer;
