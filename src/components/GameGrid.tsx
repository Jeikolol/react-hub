import { SimpleGrid, Text } from '@chakra-ui/react'

import useGames, { Game } from '../hooks/useGames'

import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import Each from '../Each'

function GameGrid() {
	const { data, error, isLoading } = useGames()
	const skeletons = [1, 2, 3, 4, 5, 6]

	return (
		<>
			{error.length > 0 && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={10}>
				{isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
				<Each<Game>
					of={data}
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
