import { Dispatch, useEffect, useState } from "react";

const useLocalStorage = (
  storageKey: string,
  defaultState: unknown
): [unknown, Dispatch<Record<string, unknown>>] => {
  const [value, setValue] = useState<Record<string, unknown>>(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultState
  );

  useEffect((): void => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
};

export { useLocalStorage };
