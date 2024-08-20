import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

export const PlatfromSelector = () => {
  const {data,error} = usePlatforms();
  console.log('Platforms');
  
  console.log(data);
  if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platfroms</MenuButton>
        <MenuList>
          {data.map(p=><MenuItem key={p.id}>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}
