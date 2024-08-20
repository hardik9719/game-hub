import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
interface Props{
    onSelectSortOrder:(sortOrder:string)=>void;
    sortOrder:string
}
export const SortSelector = ({onSelectSortOrder,sortOrder}:Props) => {
    const sortOrders = [
        {value:'release_dates desc',label:'Release Date'},
        {value:'name asc',label:'Name'},
        {value:'rating desc',label:'Rating'},
    ]
    const currentSortOrder = sortOrders.find(order=>order.value ===sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(order=><MenuItem onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
      )
}
