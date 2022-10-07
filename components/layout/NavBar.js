import React from 'react';
import Image from 'next/image';
import Logo from '../../images/meal_khuj_logo.png';
import { Box, Flex, ListItem, UnorderedList, Link } from '@chakra-ui/react';

function NavBar() {
	return (
		<Flex as="nav" justify="space-between" align="center" py="2rem">
			<Link href="/">
				<Box maxW="150px">
					<Image src={Logo} />
				</Box>
			</Link>

			<UnorderedList display="flex" gap="1.5rem">
				<ListItem fontSize="1.8rem">
					<Link href="/meals">Meals</Link>
				</ListItem>
				<ListItem fontSize="1.8rem">
					<Link href="/SavedMeals">Saved List</Link>
				</ListItem>
			</UnorderedList>
		</Flex>
	);
}

export default NavBar;
