import { Box, Tag, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { SearchResult as SearchResultObject, getPackument } from 'query-registry';
import { age } from '../utils';
import SearchScore from './SearchScore';

interface SearchResultProps {
  result: SearchResultObject;
};

const SearchResult = ({ result }: SearchResultProps): React.ReactNode => {
  const { package: { name }, score } = result;

  const { data } = useQuery({
    queryKey: ['package', name],
    queryFn: () => getPackument({ name })
  });

  if (!data) {
    console.error(`Couldn't fetch package ${name}`);
    return null;
  }

  return (
    <Box display='flex' gap={3} alignItems='stretch' justifyContent='start' p={2.5} bgColor='white' borderRadius={5}>
      <SearchScore score={score} />
      <Box display='flex' flexDirection='column' gap={2.5}>
        <Text fontWeight='700' fontSize='20px' lineHeight='1.4'>{data.name}</Text>
        <Text fontWeight='300' color='blackAlpha.700'>{data.description}</Text>
        {data.keywords && (<Box display='flex' flexWrap='wrap' gap={2}>
          {data.keywords && (
            data.keywords?.slice(0, 10).map(keyword => (
              <Tag color='gray.600' fontWeight='550' fontSize='12px' whiteSpace='nowrap'>{keyword}</Tag>
            ))
          )}

        </Box>)}
        
        <Box display='flex' gap={1.5}>
          {data.author && <Text color='blackAlpha.700'>{data.author?.name}</Text>}
          <Text fontWeight='300' color='blackAlpha.600'>{data.author ? 'p' : 'P'}ublished</Text>
          <Text fontWeight='300' color='blackAlpha.600'>{data.distTags.latest}</Text>
          <Text fontWeight='300' color='blackAlpha.600'>{age(data.time.modified)}</Text>
        </Box>
      </Box>
      
    </Box>
  );
};

export default SearchResult;