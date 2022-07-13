import { useEffect, useState } from "react";

type Value = string | undefined;

const useDebounce = (value: Value, delay: number): Value => {
  const [debounceValue, setDebounceValue] = useState<Value>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
