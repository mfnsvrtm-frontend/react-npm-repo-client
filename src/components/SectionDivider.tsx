import { Box, Flex, Text, TextProps } from '@chakra-ui/react';

interface SectionDividerProps extends TextProps {
  name: string;
};

const SectionDivider = ({ name, ...rest }: SectionDividerProps): React.ReactNode => {
  const bgStyle =
    `repeating-linear-gradient(
      45deg,
      var(--chakra-colors-blackAlpha-200),
      var(--chakra-colors-blackAlpha-200) 8px,
      transparent 8px,
      transparent 16px
    )`;

  return (
    <Flex gap={rest.gap}>
      <Text {...rest}>{name}</Text>
      <Box bg={bgStyle} flexGrow={1}></Box>
    </Flex>
  );
};

export default SectionDivider;