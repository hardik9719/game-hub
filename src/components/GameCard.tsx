import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardHeader, CardBody, Stack, Text,Image,HStack, CardFooter, Button, Heading } from '@chakra-ui/react'
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
          <HStack justify='space-between'>
              <Text>{game.genre}</Text>
              <Text>{game.platform}</Text>
          </HStack>
      </Stack>
  </CardBody>
  <CardFooter>
    <Button>View here</Button>
  </CardFooter>
</Card>
}
