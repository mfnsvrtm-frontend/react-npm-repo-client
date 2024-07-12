import { Box, Tag, Text } from '@chakra-ui/react';
import { SearchResult as SearchResultObject } from 'query-registry';
import { age } from '../utils';
import SearchScore from './SearchScore';

interface SearchResultProps {
  result: SearchResultObject;
};

const SearchResult = ({ result }: SearchResultProps): React.ReactNode => {
  const { package: data, score } = result;

  return (
    <Box display='flex' gap={3} alignItems='stretch' justifyContent='start' p={2.5} bgColor='white' borderRadius={5}>
      <SearchScore score={score} />
      <Box display='flex' flexDirection='column' gap={2.5}>
        <Text fontWeight='700' fontSize='20px' lineHeight='1.4'>{data.name}</Text>
        {data.description && <Text fontWeight='300' color='blackAlpha.700'>{data.description}</Text>}
        {data.keywords && (
          <Box display='flex' flexWrap='wrap' gap={2}>
            {data.keywords && (
              data.keywords?.slice(0, 10).map(keyword => (
                <Tag key={keyword} color='gray.600' fontWeight='550' fontSize='12px' whiteSpace='nowrap'>{keyword}</Tag>
              ))
            )}
          </Box>
        )}

        <Box display='flex' gap={1.5}>
          {data.author && <Text color='blackAlpha.700'>{data.author?.name}</Text>}
          <Text fontWeight='300' color='blackAlpha.600'>{data.author ? 'p' : 'P'}ublished</Text>
          <Text fontWeight='300' color='blackAlpha.600'>{data.version}</Text>
          <Text fontWeight='300' color='blackAlpha.600'>{age(data.date)}</Text>
        </Box>
      </Box>

    </Box>
  );
};

export default SearchResult;