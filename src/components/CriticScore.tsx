import { Badge } from '@chakra-ui/react';

interface Props{
    score:number | null;
}

export const CriticScore = ({score}:Props) => {
    let color = score?score>75?'green':score>50?'yellow':'':"N/A"
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2}>{score?Math.round(score):"N/A"}</Badge>
  )
}
