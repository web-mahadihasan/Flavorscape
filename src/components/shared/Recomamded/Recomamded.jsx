import img1 from "../../../assets/home/slide1.jpg";
import PrimaryButton from "../../common/PrimaryButton";

const Recomamded = ({ itemData }) => {
  const { name, recipe, image, price } = itemData || {};
  return (
    <>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <figure>
          <img src={image} alt="card image" className="aspect-video w-full" />
        </figure>
        <div className="p-6">
          <header className="text-center space-y-3 font-inter">
            <h3 className="text-xl font-medium text-slate-700">{name}</h3>
            <p className="text-base text-slate-400"> {recipe}</p>
            <PrimaryButton color={"#d1a054"}>Add to Cart</PrimaryButton>
          </header>
        </div>
      </div>
    </>
  );
};

export default Recomamded;
