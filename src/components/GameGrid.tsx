import { SimpleGrid, Text } from '@chakra-ui/react'

import useGames, { Game } from '../hooks/useGames'

import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import Each from '../Each'
import { GameQuery } from '../App'

interface Props {
	gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Readonly<Props>) {
	const { data, error, isLoading } = useGames(gameQuery)
	const skeletons = [1, 2, 3, 4, 5, 6]

	if (error) return <Text>{error}</Text>
	return (
		<>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding={5}
				spacing={6}>
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
