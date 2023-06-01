import { useState } from "react";

export function useLocalStorage<T>(item: string) {
  const storedValue = localStorage.getItem(item);
  const parsedValue = storedValue ? JSON.parse(storedValue) : null;
  const [value, setValue] = useState(parsedValue == null ? 0 : parsedValue);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
