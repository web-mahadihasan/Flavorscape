import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>  {
            fetch(`${import.meta.env.VITE_BASE_URL}/api/reviews`)
            .then(res =>  res.json())
            .then(data =>  setReviews(data))
        }, [])
    return (
        <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                reviews?.map(review =>  <SwiperSlide key={review._id}><TestimonialCard review={review}/></SwiperSlide>)
            }
        </Swiper>
        </>
    );
};

export default Testimonial;