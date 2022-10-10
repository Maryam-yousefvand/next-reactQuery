import Image from 'next/image';
import React from 'react';
import { Box, Container, Flex, Text, Link } from '@chakra-ui/react';


function HeroSection() {

	
	return (
		<Flex as="section" w="100%" h="80vh">
			<Flex justify="space-between" align="center" my="5rem" gap="5rem">
				<Text as="div" flex="1" maxW="50%">
					<Text
						as="h1"
						maxWidth="450px"
						fontSize="5rem"
						textTransform="capitalize"
					>
						<Text as="span" color="primaryText">
							meal recipe
						</Text>
						<br />
						for you
					</Text>
					<Text as="p" fontSize="1.5rem" color="text">
						a listing website of meal recipe
					</Text>
					<Flex gap="1rem" mt="3rem">
						<Flex
							as={Link} href="/meals" color="white" bg="btn.primary" py="1rem" px="2rem" justify="center"
							align="center" fontSize="1.8rem" mt="1rem" border="none" borderRadius="6px"
						>
							Explore Meals
						</Flex>
						<Flex as={Link} href="/SavedMeals" color="white" bg="btn.gray" py="1rem" px="2rem"
							justify="center" align="center" fontSize="1.8rem" mt="1rem" border="none"
							borderRadius="6px"
						>
							Saved Meals
						</Flex>
					</Flex>
				</Text>
				<Box
					flex="1"
					w='40vw'
					objectFit="cover"
					overflow="hidden"
					display='block'					
				>
					 <Image
					src='/images/hero_img.jpg'
					alt="image-alt-text"
					loading="lazy"
					width="400px"
					height="400px"					
					/>		
				</Box>
			</Flex>
		</Flex>
	);
}

export default HeroSection;
