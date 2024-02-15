import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatform'
import Each from '../Each'

function PlatformSelector() {
	const { data } = usePlatforms()
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}>
				Platforms
			</MenuButton>
			<MenuList>
				<Each<Platform>
					of={data}
					render={(platform, index) => (
						<MenuItem
							key={index}
							paddingY="5px">
							{platform.name}
						</MenuItem>
					)}
				/>
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector
