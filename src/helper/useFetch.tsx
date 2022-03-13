import { useEffect, useState } from "react";
import { axiosInstance } from "../api/baseUrl";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [errors, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(url);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Error");
      console.log(error);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return {
    data,
    errors,
    isLoading,
  };
};

export default useFetch;
