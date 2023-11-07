import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mt-44 lg:mt-3 mb-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-48 lg:h-[600px]">
            <p className="w-full h-full flex items-center justify-center italic md:text-4xl leading-loose slider-fonts">
              “We had a week where we had nothing, and <br />
              Community Food Share made all the difference.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-96 lg:h-[600px] rounded-lg">
            <p className="w-full h-full flex items-center justify-center italic md:text-4xl leading-loose slider-fonts">
              I am proud to say I volunteer for Community <br /> Food Share. You
              all are doing incredible things <br />
              for your neighbors and volunteers.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-96 lg:h-[600px]">
            <p className="w-full h-full flex items-center justify-center italic md:text-4xl leading-loose slider-fonts">
              “Wonderful organization. I always leave with a <br />
              cart full of food and a smile on my face. Thank <br />
              you for all that you do.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-96 lg:h-[600px]">
            <p className="w-full h-full flex items-center justify-center italic md:text-4xl leading-loose slider-fonts">
              The work of Community Food Share and their <br /> community
              partners is not only life-saving, but <br /> also ‘life-enabling.’
              “
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-96 lg:h-[600px]">
            <p className="w-full h-full flex items-center justify-center italic md:text-4xl leading-loose slider-fonts">
              “Thank you for all your hard work and <br /> kindness! I do not know what
              I would have done <br /> without this service.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
