import { Button, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
interface Props {
  onSelectGenre: (id: Genre) => void;
  selectedGenre: Genre | null;
}
export const GenreList = ({
  onSelectGenre,
  selectedGenre,
}: Props) => {
  const { data, isLoading,error} = useGenres("fields name,slug;");
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem fontSize="lg" key={genre.id} paddingY='5px'>
          <Button
            fontWeight={
              genre.id === selectedGenre?.id ? "bold" : "normal"
            }
            onClick={() =>
              onSelectGenre(genre)
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
