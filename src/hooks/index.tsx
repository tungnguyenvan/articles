import { useCallback, useEffect, useState } from "react";
import Network from "../utils/Network";

export const useGet = <T, P = object>(request: {
  path: string;
  params?: P;
  skip?: boolean;
  onError?: (error: unknown) => void;
}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    if (request.skip) {
      return;
    }

    setLoading(true);
    try {
      const fetchData = await Network.get<T, P>(request.path, request.params);
      setData(fetchData);
    } catch (error) {
      request.onError && request.onError(error);
    } finally {
      setLoading(false);
    }
  }, [request, setData]);

  useEffect(() => {
    // TODO: Add a check to see if the data is already fetched

    fetchData();
  }, [fetchData]);

  return { data, loading, fetchData };
};

// TODO: Add a usePost hook here
// TODO: Add a usePut hook here
// TODO: Add a useDelete hook here
