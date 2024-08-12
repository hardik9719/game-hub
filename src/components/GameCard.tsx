import { Game } from '../hooks/useGames'
import { Card, CardBody, Stack, Text,Image,HStack, CardFooter, Button, Heading } from '@chakra-ui/react'
import { PlatformIconList } from './PlatformIconList'
interface Props{
    game:Game
}
export const GameCard = ({game}:Props) => {
  return  <Card borderRadius='10px' overflow='hidden' key={game.id}>
  <Image
    src={game.thumbnail}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <CardBody>
      <Stack>
          <HStack>
              <Heading>{game.title}</Heading>
          </HStack>
          <Text>{game.short_description}</Text>
          <HStack justify='space-between' verticalAlign='text-bottom'>
              <Text>{game.genre}</Text>
              <PlatformIconList platform={game.platform} />
          </HStack>
      </Stack>
  </CardBody>
  <CardFooter>
    <Button>View here</Button>
  </CardFooter>
</Card>
}
