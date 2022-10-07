import Image from 'next/image';
import React from 'react';
import HeroImg from '../../images/hero_img.jpg';
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
						<Text as="span" color="#e85d04">
							meal recipe
						</Text>
						<br />
						for you
					</Text>
					<Text as="p" fontSize="1.5rem" color="#717171">
						a listing website of meal recipe
					</Text>
					<Flex gap="1rem" mt="3rem">
						<Flex
							as={Link} href="/meals" color="white" bg="#e85d04" py="1rem" px="2rem" justify="center"
							align="center" fontSize="1.8rem" mt="1rem" border="none" borderRadius="6px"
						>
							Explore Meals
						</Flex>
						<Flex as={Link} href="/meals" color="white" bg="#313235" py="1rem" px="2rem"
							justify="center" align="center" fontSize="1.8rem" mt="1rem" border="none"
							borderRadius="6px"
						>
							Saved Meals
						</Flex>
					</Flex>
				</Text>
				<Box
					flex="1"
					w="50%"
					maxW="400px"
					maxH="400px"
					objectFit="cover"
					overflow="hidden"
				>
					<Image src={HeroImg} />
				</Box>
			</Flex>
		</Flex>
	);
}

export default HeroSection;
