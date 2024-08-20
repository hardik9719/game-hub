import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { PlatfromSelector } from "./components/PlatfromSelector";
import { Genre } from "./hooks/useGenres";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
              selectedGenre={selectedGenre}
              onSelectGenre={(category) => setSelectedGenre(category)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatfromSelector />
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
      {/* <IGDBView /> */}
    </>
  );
}

export default App;
