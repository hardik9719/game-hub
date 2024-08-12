import useGames from "../hooks/useGames";

export const GenreList = () => {
  const { data } = useGames();
  const uniqueCategory = Array.from(
    new Set(data.map((item) => item.genre.trim()))
  );

  return (
    <ul>
      {uniqueCategory.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};
