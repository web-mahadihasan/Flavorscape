const MenuCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div className="flex w-full overflow-hidden font-inter bg-white rounded-lg border cursor-pointer border-base-200 shadow-lg">
      <div className="w-1/3 bg-cover bg-landscape min-h-[132px] lg:h-[132px]">
        <img src={image} alt="" className="h-full" />
      </div>
      <div className="w-2/3 p-2 px-4">
        <h1 className="text-xl font-normal font-cinzel text-black">{name}</h1>
        <p className="mt-2 text-sm text-gray-600">{recipe}</p>
        <div className="flex justify-between mt-1 item-center">
          <h1 className="text-xl font-bold text-yellow">$ {price}</h1>
          <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

// {
//     "_id": "642c155b2c4774f05c36eeb1",
//     "name": "Grilled Chicken Sandwich",
//     "recipe": "Juicy grilled chicken breast served on a toasted bun with fresh veggies.",
//     "image": "https://i0.wp.com/zestgyro.com/wp-content/uploads/2024/07/grilled-chickenn.jpg?fit=251%2C201&ssl=1",
//     "category": "popular",
//     "price": 9.75
//   },
//   {
//     "_id": "642c155b2c4774f05c36eeb2",
//     "name": "Spaghetti Carbonara",
//     "recipe": "Creamy spaghetti tossed with crispy pancetta, egg yolks, and Parmesan.",
//     "image": "https://t3.ftcdn.net/jpg/02/23/23/96/360_F_223239655_M7QEWu2ITBuJ3wX8dkSbEukUMx8YgdSt.jpg",
//     "category": "popular",
//     "price": 14.0
//   }
