import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { PlatfromSelector } from "./components/PlatfromSelector";
import { IGDBView } from "./components/IGDBView";
function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    // <Grid
    //   templateAreas={{
    //     base: `"nav"" main"`,
    //     lg: `"nav nav" "aside main"`, //1024px
    //   }}
    //   templateColumns={{
    //     base: "1fr",
    //     lg: "200px 1fr",
    //   }}
    // >
    //   <GridItem area="nav">
    //     <NavBar />
    //   </GridItem>
    //   <Show above="lg">
    //     <GridItem area="aside" padding="10px">
    //       <GenreList
    //         selectedGenre={selectedCategory}
    //         onSelectCategory={(category) => setSelectedCategory(category)}
    //       />
    //     </GridItem>
    //   </Show>
    //   <GridItem area="main">
    //     <PlatfromSelector />
    //     <GameGrid selectedCategory={selectedCategory}></GameGrid>
    //   </GridItem>
    // </Grid>
    <IGDBView />
  );
}

export default App;
