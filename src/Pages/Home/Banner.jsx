import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';

import img_1 from "../../assets/Banner_img/big_banner_1.jpg"
import img_2 from "../../assets/Banner_img/big_banner_2.jpg"
import img_3 from "../../assets/Banner_img/big_banner_3.jpg"
import img_4 from "../../assets/Banner_img/big_banner_4.jpg"
import img_5 from "../../assets/Banner_img/big_banner_5.jpg"

const Banner = () => {
    return (
        <section className='my-6 md:my-10'>
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
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img_1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img_2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img_3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img_4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img_5} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;