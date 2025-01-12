import { useEffect, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import Banner from "./Banner";
import Category from "./category/category";
import FeturedMenu from "./FeaturedMenu/FeturedMenu";
import PopularMenu from "./PoplularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";
import PrimaryButton from "../../components/common/PrimaryButton";
import FoodCard from "../../components/shared/FoodCard/FoodCard";

const Home = () => {
  const [recomamdeds, setRecomamdeds] = useState([]);
  useEffect(() => {
    fetch("allMenu.json")
      .then((res) => res.json())
      .then((data) => setRecomamdeds(data.slice(0, 4)));
  }, []);

  return (
    <div className="">
      {/* Banner section  */}
      <section className=" mx-auto px-4 xl:px-0">
        <Banner />
      </section>

      {/* Category section  */}
      <section className="max-w-7xl mx-auto px-4 xl:px-0 my-10">
        <SectionTitle
          title={"order online"}
          subtitle={"--- From 11:00am to 10:00pm --- "}
        />

        <div className="max-h-[450px] mt-12">
          <Category />
        </div>
      </section>

      {/* Popular Menu section  */}
      <section className="max-w-7xl mx-auto px-4 xl:px-0 my-16">
        <PopularMenu />
      </section>

      {/* Chef recomamded section  */}
      <section className="max-w-7xl mx-auto px-4 xl:px-0 my-24">
        <SectionTitle title={"CHEF RECOMMENDS"} subtitle={"---Should Try---"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-6">
          {recomamdeds?.map((recomamded) => (
            <FoodCard key={recomamded._id} itemData={recomamded} />
          ))}
        </div>
      </section>
      {/* Featured Menu  */}
      <section className="w-full my-24">
        <FeturedMenu />
      </section>

      {/* Testimonial section  */}
      <section className="max-w-5xl mx-auto px-4 xl:px-0 my-24">
        <SectionTitle
          title={"TESTIMONIALS"}
          subtitle={"---What Our Clients Say---"}
        />
        <div className="my-10">
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Home;
