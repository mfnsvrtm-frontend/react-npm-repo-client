import { SearchIcon } from '@chakra-ui/icons';
import { Container, Input, InputGroup, InputRightElement, List, ListItem } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { searchPackages } from 'query-registry';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import SearchResult from '../components/SearchResult';

const Index = (): React.ReactNode => {
  const [search, setSearch] = useState('');
  const [debounced] = useDebounce(search, 300);
  const { data } = useQuery({
    queryKey: ['search', debounced],
    queryFn: () => searchPackages({ query: { text: debounced } })
  });

  return (
    <Container maxW='container.md' p={5} display='grid' gap={5} gridTemplateRows='auto 1fr'>
      <InputGroup>
        <Input value={search} bgColor='white' onChange={event => setSearch(event.target.value)} />
        <InputRightElement pointerEvents='none'>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <List spacing={8}>
        {data?.objects.map(object => (
          <ListItem key={object.package.name}>
            <SearchResult result={object}/>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;