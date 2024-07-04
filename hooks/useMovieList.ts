import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  console.log('fetched movies:', data);
  console.error('error:', error);

  return {
    data,
    error,
    isLoading
  }
};

export default useMovieList;