import { Badge } from '@chakra-ui/react';

interface Props{
    score:number;
}

export const CriticScore = ({score}:Props) => {
    let color = score>75?'green':score>50?'yellow':'';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2}>{Math.round(score)}</Badge>
  )
}
