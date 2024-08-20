import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import useIGDBGames, { Platform } from "../hooks/useIGDBGame";
import { Genre } from "../hooks/useGenres";
import { GameCardContainer } from "./GameCardContainer";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform:Platform | null;
}
export const GameGrid = ({ selectedGenre,selectedPlatform }: Props) => {
  const { data, error, isLoading } = useIGDBGames(selectedGenre,selectedPlatform);
  console.log("games");

  console.log(data);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid
        spacing={4}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
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
