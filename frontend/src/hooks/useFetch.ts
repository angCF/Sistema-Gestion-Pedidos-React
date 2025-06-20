import { useEffect, useState } from "react";

export type UseFetchResult<T> = {
  data: T;
  error: string | null;
  loading: boolean;
};

const useFetch = <T>(url: string, initialData: T): UseFetchResult<T> => {
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        setData(initialData); // limpia datos previos para evitar estados inconsistentes
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error consultando información');
        setData(initialData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);


  return { data, error, loading };
};

export default useFetch;