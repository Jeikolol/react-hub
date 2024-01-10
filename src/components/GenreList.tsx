import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import Each from '../Each'
import useData from '../hooks/useData'

function GenreList() {
	const { data } = useGenres()
	return (
		<ul>
			<Each<Genre>
				of={data}
				render={(genre, index) => <li key={index}>{genre.name}</li>}
			/>
		</ul>
	)
}

export default GenreList
