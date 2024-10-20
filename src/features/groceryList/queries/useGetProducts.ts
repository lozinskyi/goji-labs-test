import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";


const useGetProducts = () => {
  const { data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { data, error };
}

export default useGetProducts