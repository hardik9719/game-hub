import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import gameService, {Game,} from "../services/game-service";
import useGames from "../hooks/useGames";
import { Card, CardHeader, Heading, Image,CardBody, CardFooter, Button,Text, SimpleGrid, HStack, Stack } from "@chakra-ui/react";

export const GameGrid = () => {
    const {games,error,isLoading, setError,setUsers} = useGames();
  return <>
  {error && <p className="text-danger">{error}</p>}
  <SimpleGrid spacing={4} columns={5}>
  {games.slice(0,10).map(g=>{
    return <Card borderRadius='10px' key={g.id}>
    <CardHeader>
    <Image
      src={g.thumbnail}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
        <Stack>
            <HStack>
                <Text>{g.title}</Text>
            </HStack>
            <Text>{g.short_description}</Text>
            <HStack justify='space-between'>
                <Text>{g.genre}</Text>
                <Text>{g.platform}</Text>
            </HStack>
        </Stack>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  })}
</SimpleGrid>
  </>
//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       {isLoading && <div className="spinner-border"></div>}

//       <button
//         className="btn btn-primary mb-3"
//         //   onClick={addUser}
//       >
//         Add User
//       </button>
//       <ul className="list-group">
//         {games.map((g) => (
//           <li
//             key={g.id}
//             className="list-group-item d-flex justify-content-between"
//           >
//             {g.title}
//             <div>
//               <button
//                 className="btn btn-outline-secondary mx-1"
//                 // onClick={() => updateUser(u)}
//               >
//                 Update
//               </button>
//               <button
//                 className="btn btn-outline-danger"
//                 // onClick={() => deleteUser(u)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
};
