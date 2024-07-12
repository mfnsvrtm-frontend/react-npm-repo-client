import { Container } from '@chakra-ui/react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import LoadingBox from '../components/LoadingBox';
import usePackagePage from '../hooks/pages/usePackagePage';

const Package = (): React.ReactNode => {
  const { data, isLoading } = usePackagePage();

  return (
    <Container maxW='container.md' p={5} minH='100vh'>
      {isLoading
      ? <LoadingBox minH='100vh' />
      : <MarkdownPreview source={data?.readme} wrapperElement={{ "data-color-mode": "light" }} />}
    </Container>
  );
};

export default Package;