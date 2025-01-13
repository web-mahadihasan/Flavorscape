import Cover from "../../components/shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/common/SectionTitle";
import MenuCard from "../../components/shared/MenuCard/MenuCard";
import PrimaryButton from "../../components/common/PrimaryButton";
import { Link } from "react-router";

const OurMenu = () => {
    const {menu} = useMenu()
    const todaysOffer = [...menu].filter(prev =>  prev.category ===  "offered")
    const dessertMenu = [...menu].filter(prev =>  prev.category ===  "dessert")
    const pizzaMenu = [...menu].filter(prev =>  prev.category ===  "pizza")
    const saladMenu = [...menu].filter(prev =>  prev.category ===  "salad")
    const soupMenu = [...menu].filter(prev =>  prev.category ===  "soup")
    console.log(pizzaMenu)

    return (
        <div>
            <Cover img={img} height={"750px"} title={"Our Menu"} subTitle={"Would you like to try a dish?"}/>
            <section className="max-w-7xl mx-auto px-4 xl:px-0 my-24">
                {/* Todays offerd  */}
                <div className="my-24">
                    <SectionTitle title={"TODAY'S OFFER"} subtitle={"---Don't miss---"}/>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            todaysOffer?.map(item =>  <div key={item._id}>
                                <MenuCard item={item}/>
                            </div>)
                        }
                    </div>
                    <div className="text-center my-8">
                    <Link to={`/order/offered`}><PrimaryButton>Order your favorite food</PrimaryButton></Link>
                    </div>
                </div>


                {/* Dessert Menu  */}
                <div className="my-24">
                    <div className="my-24">
                        <Cover img={dessertImg} height={"600px"} title={"DESSERTS"} subTitle={"Indulge in our irresistible selection of heavenly desserts, thoughtfully crafted to satisfy your sweetest cravings and leave you wanting more."}/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            dessertMenu?.slice(0, 6).map(item =>  <div key={item._id}>
                                <MenuCard item={item}/>
                            </div>)
                        }
                    </div>
                    <div className="text-center my-8">
                        <Link to={`/order/dessert`}><PrimaryButton>Order your favorite food</PrimaryButton></Link>
                    </div>
                </div>

                {/* Pizza Menu  */}
                <div className="my-24">
                    <div className="my-24">
                        <Cover img={pizzaImg} height={"600px"} title={"PIZZA"} subTitle={"Savor the taste of our mouthwatering pizzas, baked to perfection with fresh ingredients, bubbling cheese, and flavors that delight every slice."}/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            pizzaMenu?.slice(0, 9).map(item =>  <div key={item._id}>
                                <MenuCard item={item}/>
                            </div>)
                        }
                    </div>
                    <div className="text-center my-8">
                    <Link to={`/order/pizza`}><PrimaryButton>Order your favorite food</PrimaryButton></Link>
                    </div>
                </div>

                {/* Pizza Menu  */}
                <div className="my-24">
                    <div className="my-24">
                        <Cover img={saladImg} height={"600px"} title={"SALADS"} subTitle={"Enjoy our vibrant salads, made with the freshest ingredients, bursting with flavors and packed with wholesome goodness."}/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            saladMenu?.slice(0, 6).map(item =>  <div key={item._id}>
                                <MenuCard item={item}/>
                            </div>)
                        }
                    </div>
                    <div className="text-center my-8">
                    <Link to={`/order/salad`}><PrimaryButton>Order your favorite food</PrimaryButton></Link>
                    </div>
                </div>

                {/* Pizza Menu  */}
                <div className="my-24">
                    <div className="my-24">
                        <Cover img={soupImg} height={"600px"} title={"SOUP"} subTitle={"Be delighted by our heartwarming soups, crafted with rich flavors and wholesome ingredients to warm your heart and soul."}/>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            soupMenu?.slice(0, 6).map(item =>  <div key={item._id}>
                                <MenuCard item={item}/>
                            </div>)
                        }
                    </div>
                    <div className="text-center my-8">
                    <Link to={`/order/soup`}><PrimaryButton>Order your favorite food</PrimaryButton></Link>
                    </div>
                </div>

               
            </section>
        </div>
    );
};

export default OurMenu;