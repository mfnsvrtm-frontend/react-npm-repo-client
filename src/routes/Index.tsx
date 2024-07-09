import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputRightElement, List, ListItem } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { searchPackages } from 'query-registry';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

const Index = (): React.ReactNode => {
  const [search, setSearch] = useState('');
  const [debounced] = useDebounce(search, 300);
  const { data } = useQuery({
    queryKey: ['search', debounced],
    queryFn: () => searchPackages({ text: debounced })
  });

  return (
    <Box display='grid' gap={5} gridTemplateRows='auto 1fr' justifyItems='center'>
      <InputGroup maxW='md'>
        <Input value={search} onChange={event => setSearch(event.target.value)}  />
        <InputRightElement pointerEvents='none'>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <List>
        {data?.objects.map(object => <ListItem key={object.package.name}>{object.package.name}</ListItem>)}
      </List>
    </Box>
  )
};

export default Index;