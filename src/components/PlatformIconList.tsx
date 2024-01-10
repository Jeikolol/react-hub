import { HStack, Icon, Text } from '@chakra-ui/react'
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

import { Platform } from '../hooks/useGames'

interface Props {
	platforms: Platform[]
}

function PlatformIconList({ platforms }: Props) {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		web: BsGlobe,
		android: FaAndroid,
	}

	return (
		<HStack>
			{platforms.map((platform) => (
				<Icon
					as={iconMap[platform.slug]}
					key={platform.id}
					color={'gray.500'}
				/>
				// <Text>{platform.name}</Text>
			))}
		</HStack>
	)
}

export default PlatformIconList
