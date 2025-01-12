import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const includedShapesStyles = [ThinRoundedStar].map((itemShapes) => ({
  itemShapes,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
}));

const TestimonialCard = ({ review }) => {
  const { name, details, rating, image } = review || {};
  const floatValues = [5];
  return (
    <div className="flex items-center justify-center px-5 py-12 font-inter">
      <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 border border-base-200 bg-white rounded-lg shadow-lg  ">
        <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src={image}
              className="mx-auto object-cover rounded-full h-20 w-20 ring-2 ring-offset-2 ring-offset-white ring-yellow"
            />
          </a>
        </div>
        <div className="w-full mb-10">
          <div className="h-3 text-6xl leading-tight text-left text-yellow">
            “
          </div>
          <p className="px-5 text-base text-center text-gray-600 ">{details}</p>
          <div className="h-3 -mt-3 text-6xl leading-tight text-right text-yellow">
            ”
          </div>
        </div>

        <div>
          {includedShapesStyles.map((itemStyles, index) => (
            <div
              style={{ maxWidth: 120, width: "100%" }}
              className="mx-auto my-2"
            >
              <Rating
                key={`shape_${index}`}
                value={rating}
                readOnly
                itemStyles={itemStyles}
              />
            </div>
          ))}
        </div>

        <div className="w-full">
          <p className="font-bold text-center text-yellow text-md">{name}</p>
          <p className="text-xs text-center text-gray-500 ">@{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
