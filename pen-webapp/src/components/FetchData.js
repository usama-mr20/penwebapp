import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, isLoading, error };
};
export default FetchData;
