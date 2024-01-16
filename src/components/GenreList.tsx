import useGenres, { Genre } from '../hooks/useGenres'
import Each from '../Each'
import { HStack, List, ListItem, Image, Text, Spinner } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'

function GenreList() {
	const { data, isLoading, error } = useGenres()

	if (error) return null
	if (isLoading) return <Spinner />
	return (
		<List>
			<Each<Genre>
				of={data}
				render={(genre, index) => (
					<ListItem
						key={index}
						paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Text fontSize="lg"> {genre.name} </Text>
						</HStack>
					</ListItem>
				)}
			/>
		</List>
	)
}

export default GenreList
