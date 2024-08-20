import { Button, Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
interface Props {
  onSelectGenre: (id: Genre) => void;
  selectedGenre: Genre | null;
}
export const GenreList = ({
  onSelectGenre,
  selectedGenre,
}: Props) => {
  const { data, isLoading,error} = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize='2xl'>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem fontSize="lg" key={genre.id} paddingY='5px'>
          <Button
          whiteSpace='normal'
          textAlign='left'
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
    </>
  );
};
