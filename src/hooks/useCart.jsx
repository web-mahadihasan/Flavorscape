import { useQuery } from "@tanstack/react-query";
import { AxiosSecured } from "./useAxiosSecured";
import useAuth from "./useAuth";

const useCart = () => {
    const {user} = useAuth()
    console.log(user?.email)

   const { data: cart=[], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () =>  {
            const {data} = await AxiosSecured.get(`/cartItems?email=${user?.email}`)
            return data
        }
   }) 
   return [cart, refetch]
};

export default useCart;