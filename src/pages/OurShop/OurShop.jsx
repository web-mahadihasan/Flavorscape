import { useEffect, useState } from "react";
import categoryImg from "../../assets/shop/banner2.jpg"
import Cover from "../../components/shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import CategoryTabs from "./CategoryTabs/CategoryTabs";
import FoodCard from "../../components/shared/FoodCard/FoodCard";

const OurShop = () => {
    const {menu} = useMenu()
    const [tabsTitle, setTabsTitle] = useState("SALAD")
    console.log(tabsTitle)

    
    const CategoryFood = [...menu].filter(prev =>   prev.category.toLowerCase() ===   tabsTitle.toLowerCase())
    console.log(CategoryFood)

    return (
        <div>
            <Cover img={categoryImg} height={"600px"} title={"ORDER FOOD"} subTitle={"Craving something delicious? Browse our diverse menu!"}/>
            <section className="max-w-7xl mx-auto px-4 xl:px-0">
                <div className="max-w-xl font-inter mx-auto border py-1.5 px-1.5  border-yellow my-6 rounded-lg backdrop-blur-2xl bg-white/40"
                >
                    <CategoryTabs onClick={setTabsTitle}/>
                </div>
                <div className="grid grid-cols-4 gap-6 my-12">
                    {
                        CategoryFood?.map(food =>  <FoodCard key={food._id} itemData={food}/>)
                    }
                </div>
            </section>
        </div>
    );
};

export default OurShop;