import SectionTitle from "../../../components/common/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import PrimaryButton from "../../../components/common/PrimaryButton";

const FeturedMenu = () => {
    return (
        <div className="w-full featured-card relative text-white hero">
             <div className="hero-overlay bg-opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 xl:px-0 py-20">
                <SectionTitle title={"Featured Menu"} subtitle={"---Check it out---"}/>
                <div className="md:flex items-center justify-center py-10">
                    <div className="md:h-[350px] flex-1">
                        <img src={featuredImg} alt="" className="h-full md:w-[90%] opacity-95 rounded-lg w-full object-cover"/>
                    </div>
                    <div className="font-inter space-y-3 ml-10 flex-1">
                        <p className="text-xl ">March 20, 2023</p>
                        <p className="uppercase text-xl">WHERE CAN I GET SOME?</p>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        {/* <button className="px-6 py-3 uppercase border-b-2 border-white rounded-xl font-medium hover:bg-white hover:text-black duration-300">Read more</button> */}
                        <PrimaryButton color={"#fff"}>Read More</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeturedMenu;