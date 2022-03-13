import { useEffect, useState } from "react";

const useLocalStorage = (name: string) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    // @ts-ignore
    setData(JSON.parse(localStorage.getItem(name)));
  }, [name]);

  return {
    data,
  };
};

export default useLocalStorage;
