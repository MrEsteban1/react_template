import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
    setTimeout(() => {
      setState({ data, isLoading: false, hasError: null });
    }, 2000);
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return { ...state };
};

export default useFetch;
