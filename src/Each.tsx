import { Children, ReactNode } from 'react'

interface Props<T> {
	of: T[] | []
	render: (item: T, index: number) => ReactNode
}

function Each<T>({ render, of }: Props<T>) {
	return Children.toArray(
		of.map((item: T, index: number) => render(item, index)),
	)
}

export default Each
