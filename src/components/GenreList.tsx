import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Query, QueryType } from "../hooks/useIGDBGame";
interface Props {
  onSelectGenre: (id: Genre) => void;
  selectedGenre: Genre | null;
}
export const GenreList = ({
  onSelectGenre: onSelectCategory,
  selectedGenre,
}: Props) => {
  const { data, isLoading } = useGenres("fields name,slug;");
  console.log(data);

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem fontSize="lg" key={genre.id}>
          <Button
            fontWeight={
              genre.id === selectedGenre?.id ? "bold" : "normal"
            }
            onClick={() =>
              onSelectCategory(genre)
            }
            fontSize="lg"
            variant="link"
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
