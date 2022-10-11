
import React from 'react';
import Image from 'next/image';
import { Box, Flex, ListItem, UnorderedList, Link, useColorMode, Button } from '@chakra-ui/react';
import {MoonIcon,SunIcon} from '@chakra-ui/icons'

function NavBar() {
	const { colorMode, toggleColorMode } = useColorMode('dark')

	return (
		<Flex as="nav" justify="space-between" align="center" py="2rem" px='5vw'
		 boxShadow={colorMode==='light'? 
		 ("0px 0px 5px gray") : 
		 ("none")}
		>
			<Link href="/">
				<Box maxW="150px">

					{colorMode === 'dark'? (
						<Image src="/images/meal_khuj_logo.png"  width="200px" height="80px"/>
					) : (
						<Image src="/images/meal_khuj_logo_primary.png"  width="200px" height="80px"/>
					)}			
				</Box>
			</Link>

			<Flex>
			<Button onClick={toggleColorMode}>
                {colorMode === 'dark' ? (<SunIcon color='white'  w={6} h={6}/>) : (<MoonIcon w={6} h={6}/>)}
           </Button>
			</Flex>

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
