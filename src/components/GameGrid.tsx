import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

function GameGrid() {
	const { games, error } = useGames()

	return (
		<>
			{error.length > 0 && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={10}>
				{games.map((g) => (
					<GameCard
						key={g.id}
						game={g}></GameCard>
				))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
