import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {FaWindows,FaPlaystation,FaXbox,FaAndroid,FaGamepad, FaApple, FaLaptop, FaConciergeBell} from 'react-icons/fa'
import { Platform } from '../hooks/useIGDBGame';
interface Props{
    platforms:Platform[];
}
export const PlatformIconList = ({platforms}:Props) => {
    const iconMap:{[key:string]:IconType} = {
        "win":FaWindows,
        "playstation":FaPlaystation,
        "xbox":FaXbox,
        "android":FaAndroid,
        "Web Browser":FaGamepad,
        "ios":FaApple,
        "switch":FaGamepad,
        "mac":FaLaptop,
        "psvr":FaConciergeBell
    }
  return <>
    <HStack>
      {platforms.map(p=><Icon  key={p.slug} as={iconMap[p.slug]}></Icon>)}
    </HStack>
  </>
}
