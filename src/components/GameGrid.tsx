import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import useIGDBGames from "../hooks/useIGDBGame";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../App";
interface Props {
  gameQuery:GameQuery
}
export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useIGDBGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid
        spacing={7}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.slice(0, 10).map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard  game={game}></GameCard>
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};
