import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

export const age = (timestamp: string) => {
  return timeAgo.format(new Date(timestamp), 'round');
};

export const updateSearchParams = (
  params: URLSearchParams,
  updates: { set?: string[], remove?: string; }
) => {
  const { set, remove } = updates;
  const copy = new URLSearchParams(params);
  if (set)
    copy.set(set[0], set[1]);
  if (remove)
    copy.delete(remove);
  return copy;
};