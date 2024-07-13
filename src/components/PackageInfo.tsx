import { Box, Text } from '@chakra-ui/react';
import { age } from '../utils';

interface PackageShortInfoProps {
  version: string;
  author?: { name?: string };
  date: string;
};

const PackageInfo = ({ version, author, date }: PackageShortInfoProps): React.ReactNode => {
  return (
    <Box display='flex' gap={1.5}>
      <Text fontWeight='300' color='blackAlpha.600'>Version </Text>
      <Text color='blackAlpha.700'>{version}</Text>
      <Text fontWeight='300' color='blackAlpha.600'>published</Text>
      {author && (
        <>
          <Text fontWeight='300' color='blackAlpha.600'>by </Text>
          <Text color='blackAlpha.700'>{author?.name}</Text>
        </>
      )}
      <Text fontWeight='300' color='blackAlpha.600'>{age(date)}</Text>
    </Box>
  );
};

export default PackageInfo;