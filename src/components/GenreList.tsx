import useGenres, { Genre } from '../hooks/useGenres'
import Each from '../Each'
import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
	Heading,
} from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'

interface Props {
	onSelectGenre: (genre: Genre) => void
	selectedGenre: Genre | null
}
function GenreList({ onSelectGenre, selectedGenre }: Readonly<Props>) {
	const { data, isLoading, error } = useGenres()

	if (error) return null
	if (isLoading) return <Spinner />
	return (
		<>
			<Heading
				paddingBottom={3}
				fontSize={'2xl'}>
				Genres
			</Heading>
			<List>
				<Each<Genre>
					of={data}
					render={(genre, index) => (
						<ListItem
							key={index}
							paddingY="5px">
							<HStack>
								<Image
									objectFit={'cover'}
									boxSize="32px"
									borderRadius={8}
									src={getCroppedImageUrl(genre.image_background)}
								/>
								<Button
									whiteSpace={'normal'}
									textAlign={'left'}
									fontWeight={
										genre.id === selectedGenre?.id ? 'bold' : 'normal'
									}
									onClick={() => onSelectGenre(genre)}
									fontSize="lg"
									variant="link">
									{genre.name}
								</Button>
							</HStack>
						</ListItem>
					)}
				/>
			</List>
		</>
	)
}

export default GenreList
