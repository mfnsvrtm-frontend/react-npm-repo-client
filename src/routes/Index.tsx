import { SearchIcon } from '@chakra-ui/icons';
import { Box, Container, Input, InputGroup, InputRightElement, List, ListItem } from '@chakra-ui/react';
import SearchResult from '../components/SearchResult';
import SortSelect from '../components/SortSelect';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import useIndexPage from '../hooks/pages/useIndexPage';

const Index = (): React.ReactNode => {
  const {
    search,
    setSearch,
    debounced,
    selected,
    setSelected,
    searchResults,
    isLoading
  } = useIndexPage();

  return (
    <Box bg='#f7f7f7'>
      <Container maxW='container.md' p={5} display='flex' flexDir='column' gap={5} minH='100vh' justifyContent={debounced ? 'start' : 'center'}>
        <InputGroup>
          <Input className='input' value={search} bgColor='white' onChange={event => setSearch(event.target.value)} />
          <InputRightElement pointerEvents='none'>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <SortSelect selected={selected} setSelected={setSelected} />
        {isLoading
          ? <LoadingBox flexGrow={1} />
          : (
            <List spacing={8}>
              {searchResults?.objects.map(object => (
                <ListItem key={object.package.name}>
                  <Link to={`/packages/${object.package.name}`}>
                    <SearchResult result={object} />
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
      </Container>
    </Box>
  );
};

export default Index;