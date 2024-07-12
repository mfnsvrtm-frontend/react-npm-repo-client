import { Box, Spinner } from '@chakra-ui/react';

const LoadingBox: typeof Box = (props) => {
  return (
    <Box display='grid' placeContent='center' {...props}>
      <Spinner size='xl' />
    </Box>
  );
};

export default LoadingBox;