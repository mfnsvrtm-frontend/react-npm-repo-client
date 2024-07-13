import { Box, Text } from '@chakra-ui/react';
import { SearchResult as SearchResultObject } from 'query-registry';
import SearchScore from './SearchScore';
import PackageInfo from './PackageInfo';
import PackageKeywords from './PackageKeywords';

interface SearchResultProps {
  result: SearchResultObject;
};

const SearchResult = ({ result }: SearchResultProps): React.ReactNode => {
  const { package: data, score } = result;

  return (
    <Box display='flex' gap={3} alignItems='stretch' justifyContent='start' p={2.5} bgColor='white' borderRadius={5}>
      <SearchScore score={score} />
      <Box display='flex' flexDirection='column' gap={3} lineHeight='1'>
        <Text fontWeight='700' fontSize='20px'>{data.name}</Text>
        {data.description && <Text noOfLines={2} fontWeight='300' color='blackAlpha.700'>{data.description}</Text>}
        {data.keywords && <PackageKeywords keywords={data.keywords} limit={10} />}
        <PackageInfo version={data.version} author={data.author} date={data.date} />
      </Box>
    </Box>
  );
};

export default SearchResult;