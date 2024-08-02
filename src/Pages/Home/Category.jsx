import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Category = () => {
    const [Category, setCategory] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    console.log(Category);
    return (
        <section className="mt-4 md:mt-8">
            <Swiper className="mySwiper"
                slidesPerView={12}
                loop={true}
                autoplay={{
                    delay: 4500
                }}
                // spaceBetween={28}
                modules={[Autoplay]}
                breakpoints={{
                    280: { slidesPerView: 4 },
                    425: { slidesPerView: 4 },
                    766: { slidesPerView: 6 },
                    992: { slidesPerView: 8 },
                    1420: { slidesPerView: 10 }
                }}
            >

                <div>
                    {
                        Category.map(item => <SwiperSlide
                            key={item.id}>
                            <div className="flex flex-col justify-center items-center ">
                                <div className="group w-10 md:w-24 md:h-24 h-10 rounded-full bg-slate-400  bg-opacity-20 flex justify-center items-center cursor-pointer">
                                    <img className="group-hover:scale-110 transform transition-transform duration-100 w-8 md:w-16" src={item?.image} alt="" />
                                </div>
                                <h1>{item?.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section >
    );
};

export default Category;