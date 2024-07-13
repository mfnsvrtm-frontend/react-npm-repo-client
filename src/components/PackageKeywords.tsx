import { Box, Tag } from '@chakra-ui/react';

interface PackageKeywordsProps {
  limit?: number;
  keywords: string[];
};

const PackageKeywords = ({ limit, keywords }: PackageKeywordsProps): React.ReactNode => {
  return (
    <Box display='flex' flexWrap='wrap' gap={2}>
      {keywords?.slice(0, limit).map(keyword => (
          <Tag key={keyword} color='gray.600' fontWeight='550' fontSize='12px' whiteSpace='nowrap'>{keyword}</Tag>
      ))}
    </Box>
  );
};

export default PackageKeywords;