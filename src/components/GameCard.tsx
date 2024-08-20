import { Game } from "../hooks/useIGDBGame";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  HStack,
  CardFooter,
  Button,
  Heading,
} from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import getImageUrl from "../services/image-url";
interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {

  return (
    <Card borderRadius="10px" overflow="hidden" key={game.id}>
      <Image
        src={getImageUrl(game.cover?.url)}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />

      <CardBody>
        <Stack>
          <HStack>
            <Heading>{game.name}</Heading>
          </HStack>
          <Text noOfLines={[1, 2, 3]}>{game.storyline}</Text>
          <HStack justify="space-between">
            <Text>TBD</Text>
            {game.platforms?<PlatformIconList platforms={game.platforms} />:null}
          </HStack>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  );
};
