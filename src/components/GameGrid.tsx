import useGames from "../hooks/useGames";
import { Card, CardHeader, Image,CardBody, CardFooter, Button,Text, SimpleGrid, HStack, Stack } from "@chakra-ui/react";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
    const {games,error,isLoading, setError,setUsers} = useGames();
  return <>
  {error && <p className="text-danger">{error}</p>}
  <SimpleGrid spacing={4} columns={{sm:1,md:2,lg:3,xl:5}} padding={10}>
  {games.slice(0,10).map(game=>{
    return <GameCard key={game.id} game={game}></GameCard>
  })}
</SimpleGrid>
  </>
};
