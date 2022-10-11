import {
	Box,
	Text,
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	useColorMode,
} from '@chakra-ui/react';
import React from 'react';


function TdTable ({td})  {
	return(
		<Td p=".5rem" border="none">
		<Text as="p" color="text" fontSize="1rem" lineHeight="1.8rem">
			{td}
		</Text>
	</Td>
	)
}

function IngredientsTable({ ingredientsWithMeasures }) {
	const {colorMode} = useColorMode('dark')
	const isDark = colorMode === 'dark'
	console.log(isDark);
	return (
		<Box>
			<Text as="h2" mb="2rem" fontSize="3rem">
				Ingredients
			</Text>

			<TableContainer maxW="500px" w="100%">
				<Table>
					<Tbody>
						{ingredientsWithMeasures.map(ingredient => (

							<Tr
							
								_even={isDark?  {bg: 'bgGray'}: {bg: 'btn.cornsilk'}}
								bg={isDark? ("#2a2b2e"):("btn.Blanched")}
								w="100%"
								_hover={{ bg: 'rgb(25, 26, 28)' }}
								key={ingredient.index}
							>
								<TdTable td={ingredient.ingredient} />
								<TdTable td={ingredient.measure} />
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default IngredientsTable;
