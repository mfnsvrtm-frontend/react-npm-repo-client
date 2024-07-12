import { useQuery } from '@tanstack/react-query';
import { getPackument } from 'query-registry';
import { useParams } from 'react-router-dom';

const usePackagePage = () => {
  const name = useParams()['*']!;
  const { data, isLoading } = useQuery({
    queryKey: ['package', { name }],
    queryFn: () => getPackument({ name }),
  });

  return {
    data,
    isLoading
  };
};

export default usePackagePage;