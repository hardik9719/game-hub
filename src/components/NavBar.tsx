import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/rockstar.webp'
import { ColorModeSwitch } from "./ColorModeSwitch"
import { SearchInput } from "./SearchInput"
interface Props{
  onSearch:(searchText:string)=>void;
}
export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' ></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}
