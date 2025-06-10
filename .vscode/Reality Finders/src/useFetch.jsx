import { useState } from "react";

function useFetch(cb) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async () => {};

  return { data, loading, error, fn };
}

export default useFetch;
