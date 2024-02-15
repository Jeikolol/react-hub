import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatform'
import Each from '../Each'

interface Props {
	onSelectPlatform: (platform: Platform) => void
	selectedPlatform: Platform | null
}
function PlatformSelector({
	onSelectPlatform,
	selectedPlatform,
}: Readonly<Props>) {
	const { data } = usePlatforms()
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name ?? 'Platforms'}
			</MenuButton>
			<MenuList>
				<Each<Platform>
					of={data}
					render={(platform, index) => (
						<MenuItem
							onClick={() => onSelectPlatform(platform)}
							key={index}>
							{platform.name}
						</MenuItem>
					)}
				/>
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector
