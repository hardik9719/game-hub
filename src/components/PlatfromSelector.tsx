import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

export const PlatfromSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platfroms</MenuButton>
        <MenuList>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
        </MenuList>
    </Menu>
  )
}
