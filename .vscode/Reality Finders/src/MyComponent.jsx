import { useEffect } from "react";
import useFetch from "./useFetch";

const MyComponent = () => {
  const { data, loading, error, fn } = useFetch(
    "https://dummyjson.com/posts/1"
  );

  useEffect(() => {
    fn();
  });
};

export default MyComponent;
