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

  if (debounceValue) console.log("debounceValue =>", debounceValue);
  console.log("value =>", value);

  return debounceValue;
};

export default useDebounce;
