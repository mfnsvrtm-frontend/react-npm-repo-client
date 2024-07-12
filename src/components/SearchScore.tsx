import { Box, CircularProgress } from '@chakra-ui/react';
import { SearchScore as SearchScoreObject } from 'query-registry';

interface SearchScoreProps {
  score: SearchScoreObject;
};

const SearchScore = ({ score }: SearchScoreProps): React.ReactNode => {
  let data: [number, string][] = [
    [score.final, 'gray.600'],
    [score.detail.popularity, 'cyan.200'],
    [score.detail.quality, 'purple.200'],
    [score.detail.maintenance, 'red.200']
  ];

  const bgStyle =
    `repeating-linear-gradient(
      45deg,
      var(--chakra-colors-blackAlpha-100),
      var(--chakra-colors-blackAlpha-100) 8px,
      transparent 8px,
      transparent 16px
    )`;

  return (
    <Box display='flex' flexDir='column' gap={1.5}>
      {data.map(([value, color], id) => (
        <CircularProgress key={id} thickness={60} size={6} value={value * 100} color={color} />
      ))}
      <Box flexGrow='1' w='100%' bg={bgStyle}></Box>
    </Box>
  );
};

export default SearchScore;