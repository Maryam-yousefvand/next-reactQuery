import {
	Box,
	Circle,
	Flex,
	ListIcon,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const ListItems = ({ children }) => {
	return (
		<ListItem fontSize="1rem" color="text" py="10px">
			<Flex align="center">
				<ListIcon as={Circle} bg="bgPrimary" fontSize=".7rem" />
				<Box justify="center" align="center" gap="1rem">
					Category: {" "} {children}
				</Box>
			</Flex>
		</ListItem>
	);
};

export default ListItems;
