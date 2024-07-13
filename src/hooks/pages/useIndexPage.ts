import { useQuery } from '@tanstack/react-query';
import { searchPackages } from 'query-registry';
import { useEffect, useState } from 'react';
import { SortKind, isSortKind } from '../../components/InfluenceSelect';
import { useSearchParams } from 'react-router-dom';
import { updateSearchParams } from '../../utils';
import useDebounced from '../useDebounced';
import useIsFirstRender from '../useIsFirstRender';

const sortToQueryParam = (sort: SortKind) => {
  return sort ? { [sort]: 1 } : {};
};

const useIndexPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearchRaw] = useState('');
  const [debounced, override] = useDebounced(search, 300);
  const [selected, setSelectedRaw] = useState<SortKind>(null);
  const firstLoad = useIsFirstRender();

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ['search', { text: debounced, sort: selected }],
    queryFn: () => searchPackages({ query: { text: debounced, ...sortToQueryParam(selected) } }),
    enabled: debounced.length > 0
  });

  const setSearch = (search: string) => {
    const query = search ? { set: ['query', search] } : { remove: 'query' };
    setSearchParams(params => updateSearchParams(params, query));
    setSearchRaw(search);
  };

  const setSelected = (selected: SortKind) => {
    const sorting = selected ? { set: ['sorting', selected] } : { remove: 'sorting' };
    setSearchParams(params => updateSearchParams(params, sorting));
    setSelectedRaw(selected);
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    setSearchRaw(query);
    (firstLoad);
    override(query);

    const sorting = searchParams.get('sorting');
    if (!isSortKind(sorting))
      console.error(`Invalid sorting URL param: ${sorting}`);
    else
      setSelected(sorting);
  }, [searchParams]);

  return {
    search,
    setSearch,
    debounced,
    selected,
    setSelected,
    searchResults,
    isLoading
  };
}

export default useIndexPage;