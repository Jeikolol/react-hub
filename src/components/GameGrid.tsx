import { SimpleGrid, Text } from '@chakra-ui/react'

import useGames, { Game } from '../hooks/useGames'

import GameCard from './GameCard'
import Each from '../each'
import GameCardSkeleton from './GameCardSkeleton'

function GameGrid() {
	const { games, error, isLoading } = useGames()
	const skeletons = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error.length > 0 && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={10}>
				{isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
				<Each<Game>
					of={games}
					render={(game, index) => (
						<GameCard
							key={index}
							game={game}
						/>
					)}
				/>
			</SimpleGrid>
		</>
	)
}

export default GameGrid
