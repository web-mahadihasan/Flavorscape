import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import PrimaryButton from "../../common/PrimaryButton";
import { useLocation, useNavigate } from "react-router";
import { AxiosSecured } from "../../../hooks/useAxiosSecured";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ itemData }) => {
  const { _id, name, recipe, image, price } = itemData || {};
  const {user} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [, refetch] = useCart()

  const handleAddToCart = async () =>  {
    const cartItemsData = {
      menuItemId: _id,
      userEmail: user.email,
      userName: user.displayName,
      name,
      image,
      price
    }
    if(user){
      const result = await AxiosSecured.post('/addCart', cartItemsData)
      if(result.data.insertedId){
        toast.success(`${name} Successfully added to Cart`)
        refetch() 
      }
    }else{
      Swal.fire({
        title: "Your're not login?",
        text: "Please login first to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth/login", {state: {from: location}})
        }
      });
    }
  }
  return (
    <>
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 flex flex-col">
      <figure className="relative">
        <img src={image} alt="card image" className="aspect-video w-full" />
        <p className="absolute top-2 right-2 px-3 py-[2px] bg-black text-white font-inter font-semibold w-fit rounded">$ {price}</p>
      </figure>

      <div className="flex-1 flex flex-col p-6">
        <div className="text-center space-y-3 font-inter flex-1">
          <h3 className="text-xl font-medium text-slate-700">{name}</h3>
          <p className="text-base text-slate-400 my-2">{recipe}</p>
        </div>
        <div className="card-actions mt-auto mx-auto">
          <PrimaryButton color={"#d1a054"} onClick={handleAddToCart}>
            Add to Cart
          </PrimaryButton>
        </div>
      </div>
  </div>

    </>
  );
};

export default FoodCard;
