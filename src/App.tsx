import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { PlatfromSelector } from "./components/PlatfromSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useIGDBGame";
export interface GameQuery{
  genre:Genre | null;
  platform:Platform | null;
}
function App() {
  const [gameQuery,setGameQuery] =useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav"" main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatfromSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})} />
          <GameGrid gameQuery={gameQuery} ></GameGrid>
        </GridItem>
      </Grid>
      {/* <IGDBView /> */}
    </>
  );
}

export default App;
