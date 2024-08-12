import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {FaWindows,FaPlaystation,FaXbox,FaAndroid,FaGamepad} from 'react-icons/fa'
interface Props{
    platform:string;
}
export const PlatformIconList = ({platform}:Props) => {
    const iconMap:{[key:string]:IconType} = {
        "PC (Windows)":FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        android:FaAndroid,
        "Web Browser":FaGamepad
    }
  return (
    <Icon as={iconMap[platform]} color='gray.500' />
  )
}
