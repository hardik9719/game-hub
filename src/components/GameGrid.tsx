import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <SimpleGrid
        spacing={4}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.slice(0, 10).map((game) => {
          return <GameCard key={game.id} game={game}></GameCard>;
        })}
      </SimpleGrid>
    </>
  );
};
