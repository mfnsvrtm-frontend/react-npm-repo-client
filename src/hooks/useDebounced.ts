import { useEffect, useRef, useState } from 'react';

const useDebounced = <T>(value: T, timeout: number): [T, (value: T) => void] => {
  const [debounced, setDebounced] = useState(value);
  const timerId = useRef<Timer | undefined>(undefined);
  const overrideValue = useRef<T | null>(null);

  useEffect(() => {
    timerId.current = setTimeout(() => setDebounced(value), timeout);
    return () => clearTimeout(timerId.current);
  }, [value]);

  const override = (value: T) => {
    overrideValue.current = value;
    setDebounced(overrideValue.current);
    clearTimeout(timerId.current);
  };

  return [debounced, override];
};
export default useDebounced;