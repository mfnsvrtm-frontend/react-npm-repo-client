import { Box, Text, Link, BoxProps } from '@chakra-ui/react';
import { Packument, Repository } from 'query-registry';
import PackageInfo from './PackageInfo';
import PackageKeywords from './PackageKeywords';

interface PackageCardProps extends BoxProps {
  data: Packument;
};

const repositoryUrl = (repository: string | Repository) => {
  const url = (typeof repository === 'string') ? repository : repository.url;
  return url.replace(/^.*\/\//, 'https://');
};

const PackageCard = ({ data, ...rest }: PackageCardProps): React.ReactNode => {
  const version = data.distTags['latest'];
  const date = data.time[version];
  const repository = data.repository && repositoryUrl(data.repository);

  return (
    <Box display='flex' flexDirection='column' gap={3} lineHeight='1' {...rest}>
      <PackageInfo version={version} author={data.author} date={date} />
      {data.description && <Text fontWeight='300' color='blackAlpha.700'>{data.description}</Text>}
      {data.keywords && <PackageKeywords keywords={data.keywords} />}
      <Box display='grid' justifyContent='start' gridTemplateColumns='auto auto' columnGap={2} rowGap={1}>
        {data.license && <>
          <Text as='span' fontWeight='300' color='blackAlpha.600'>License</Text>
          <Text as='span' color='blackAlpha.700'>{data.license}</Text>
        </>}
        {data.homepage && <>
          <Text as='span' fontWeight='300' color='blackAlpha.600'>Homepage</Text>
          <Link href={data.homepage} color='blackAlpha.700'>{data.homepage}</Link>
        </>}
        {data.repository && <>
          <Text as='span' fontWeight='300' color='blackAlpha.600'>Repository</Text>
          <Link href={repository} color='blackAlpha.700'>{repository}</Link>
        </>}
      </Box>
    </Box>
  );
};

export default PackageCard;