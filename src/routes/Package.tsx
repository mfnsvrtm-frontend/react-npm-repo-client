import { Container } from '@chakra-ui/react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import LoadingBox from '../components/LoadingBox';
import usePackagePage from '../hooks/pages/usePackagePage';
import PackageCard from '../components/PackageCard';
import SectionDivider from '../components/SectionDivider';

const Package = (): React.ReactNode => {
  const { name, data, isLoading } = usePackagePage();

  if (isLoading)
    return <LoadingBox minH='100vh' />;

  if (!data) {
    console.error(`Couldn't load package ${name}`);
    return null;
  }

  return (
    <Container maxW='container.md' p={5} minH='100vh' display='grid' gap={5}>
      <SectionDivider name='Package Info' color='blackAlpha.700' fontFamily='Bebas Neue' fontSize='24px' lineHeight='0.8' gap={2} />
      <PackageCard data={data} />
      <SectionDivider name='Readme' color='blackAlpha.700' fontFamily='Bebas Neue' fontSize='24px' lineHeight='0.8' gap={2} />
      <MarkdownPreview source={data?.readme} wrapperElement={{ "data-color-mode": "light" }} />
    </Container>
  );
};

export default Package;