import useGames from '../hooks/useGames'

export const GenreList = () => {
    const {games} = useGames();
    const uniqueCategory = Array.from(new Set(games.map((item) => item.genre.trim())));

  return (
    <ul>
        {uniqueCategory.map(category=><li key={category}>{category}</li>)}
    </ul>
  )
}
