import { useQuery } from "react-query";
import { toast } from "react-toastify";
import AxiosRequestId from "../axiosRequestById";
 const getCars = async (id) => {
  return await AxiosRequestId("cars",id);
};

const UseGetCars = (id) => {
  const { data, isLoading,refetch } = useQuery(["get-cars-byid"], () => getCars(id), {
    onError: (err) => {
      toast.error(err);
    },
  });
  return { data, isLoading,refetch };
};
export default UseGetCars;
