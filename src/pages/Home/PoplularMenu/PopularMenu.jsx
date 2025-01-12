import { useEffect, useState } from "react";
import MenuCard from "../../../components/shared/MenuCard/MenuCard";
import PrimaryButton from "../../../components/common/PrimaryButton";
import SectionTitle from "../../../components/common/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const {menu} = useMenu()
    const popularItem = [...menu].filter(prev =>  prev.category ===  "popular")
 
    return (
        <div>
            <SectionTitle title={"FROM OUR MENU"} subtitle={"---Check it out---"}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    popularItem?.map(item =>  <div key={item._id}>
                        <MenuCard item={item}/>
                    </div>)
                }
            </div>
            <div className="mt-10 text-center">
                    <PrimaryButton color={"#d1a054"}>View more</PrimaryButton>
            </div>
        </div>
    );
};

export default PopularMenu;