import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
interface Props{
    onSelectCategory:(genre:string)=>void;
}
export const GenreList = ({onSelectCategory}:Props) => {
  const { data, isLoading } = useGames(null);
  const uniqueCategory = Array.from(
    new Set(data.map((item) => item.genre))
  );
  if (isLoading) return <Spinner />;
  return (
    <List>
      {uniqueCategory.map((category) => (
        <ListItem fontSize="lg" key={category}>
          <Button
            onClick={() => onSelectCategory(category)}
            fontSize="lg"
            variant="link"
          >
            {category}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
