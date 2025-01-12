import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"

const Category = () => {
    return (
        <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-[450px] "
        >
          <SwiperSlide className='relative cursor-pointer'>
            <div className="relative group w-full h-[400px]">
                <img src={img1} alt="Salad" className="rounded-md w-full h-full object-cover" />
                <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div>
                <h3 className="absolute inset-0 flex font-cinzel uppercase text-2xl bottom-10 items-end justify-center text-white font-medium ">
                Salad
                </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative cursor-pointer'>
            <div className="relative group w-full h-[400px]">
                <img src={img2} alt="Salad" className="rounded-md w-full h-full object-cover" />
                <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div>
                <h3 className="absolute inset-0 flex font-cinzel uppercase text-2xl bottom-10 items-end justify-center text-white font-medium ">
                Soups
                </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative cursor-pointer'>
            <div className="relative w-full h-[400px] group">
                <img src={img3} alt="Salad" className="rounded-md w-full h-full object-cover" />
                <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div>
                <h3 className="absolute inset-0 flex font-cinzel uppercase text-2xl bottom-10 items-end justify-center text-white font-medium ">
                Pizza
                </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative cursor-pointer'>
            <div className="relative w-full h-[400px] group">
                <img src={img4} alt="Salad" className="rounded-md w-full h-full object-cover" />
                <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div>
                <h3 className="absolute inset-0 flex font-cinzel uppercase text-2xl bottom-10 items-end justify-center text-white font-medium ">
                Desserts
                </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative cursor-pointer'>
            <div className="relative w-full h-[400px] group">
                <img src={img5} alt="Salad" className="rounded-md w-full h-full object-cover" />
                <div className="absolute w-full inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-300 rounded-md"></div>
                <h3 className="absolute inset-0 flex font-cinzel uppercase text-2xl bottom-10 items-end justify-center text-white font-medium ">
                Salad
                </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Category;