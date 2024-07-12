import { Box, Tag, Text } from '@chakra-ui/react';

const sortKinds = ['popularity', 'quality', 'maintenance', null] as const;
export type SortKind = typeof sortKinds[number];

export const isSortKind = (kind: string | null): kind is SortKind => {
  return sortKinds.includes(kind as SortKind);
};

interface SortSelectProps {
  selected: SortKind;
  setSelected: (selected: SortKind) => void;
}

const SortSelect = ({ selected, setSelected }: SortSelectProps): React.ReactNode => {
  const tags: [SortKind, string][] = [
    ['popularity', 'cyan.400'],
    ['quality', 'purple.400'],
    ['maintenance', 'red.400']
  ];

  return (
    <Box display='flex' gap={2} alignItems='baseline' mt={-2} pl={1} borderRadius={5}>
      <Text
        fontFamily='mono'
        fontSize={14}
        fontWeight={500}
        color='blackAlpha.700'
        p={1}
        mr={1}
      >
        sorting
      </Text>
      {tags.map(([name, color]) => (
        <Tag
          key={name}
          cursor='pointer'
          bg={'white'}
          color={color}
          fontFamily='mono'
          px={3.5}
          py={1.5}
          outline={selected === name ? '2px solid' : '1px solid'}
          outlineColor={selected === name ? color : 'gray.200'}
          outlineOffset='-1px'
          onClick={() => setSelected(selected === name ? null : name)}
          userSelect='none'
        >
          {name}
        </Tag>
      ))}
    </Box>
  );
};

export default SortSelect;