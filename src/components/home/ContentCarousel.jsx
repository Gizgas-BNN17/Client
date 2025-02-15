import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const ContentCarousel = () => {
  // สร้างข้อมูลที่คล้ายกับที่คุณได้จาก Picsum แต่เป็นข้อมูลจาก Cloudinary
  const [data, setData] = useState([
    {
      id: "1",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739618009/Store%20Dessert/oeryx4akw3bsftuoaka4.jpg",
    },
    {
      id: "2",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739618010/Store%20Dessert/mtwqzrowlvm9fkoant0i.jpg",

    },
    {
      id: "3",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739618010/Store%20Dessert/sxvp64m6ckgw6kkcpnor.jpg",
    },
    {
      id: "4",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739618009/Store%20Dessert/l37fg8ds9zxojxmhorkt.jpg",

    },
    {
      id: "5",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739618009/Store%20Dessert/cjtuwe3uhtccnghovguw.jpg",
    },

    // เพิ่มข้อมูลรูปภาพตามต้องการ
  ]);
  const [data2, setData2] = useState([
    {
      id: "1",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739462546/Dessert2025/Dessert-1739462541786.jpg",
    },
    {
      id: "2",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739391412/Dessert2025/Dessert-1739391407730.jpg",
    },
    {
      id: "3",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739445587/Dessert2025/Dessert-1739445571619.jpg",
    },
    {
      id: "4",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739462683/Dessert2025/Dessert-1739462673627.jpg",
    },
    {
      id: "5",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739462750/Dessert2025/Dessert-1739462742010.jpg",
    },
    {
      id: "6",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739462977/Dessert2025/Dessert-1739462972587.jpg",
    },
    {
      id: "7",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739463035/Dessert2025/Dessert-1739463030229.jpg",
    },
    {
      id: "8",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739463091/Dessert2025/Dessert-1739463086374.jpg",
    },
    {
      id: "9",
      author: "Cloudinary User",
      width: 5000,
      height: 3333,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739463091/Dessert2025/Dessert-1739463086374.jpg",

    },
    {
      id: "10",
      author: "Cloudinary User",
      width: 2500,
      height: 1230,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739462546/Dessert2025/Dessert-1739462541786.jpg",
    },
    {
      id: "11",
      author: "Cloudinary User",
      width: 2500,
      height: 1230,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739463212/Dessert2025/Dessert-1739463190424.jpg",
    },
    {
      id: "12",
      author: "Cloudinary User",
      width: 2500,
      height: 1230,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739372332/Dessert2025/Dessert-1739372327106.jpg",
    },
    {
      id: "12",
      author: "Cloudinary User",
      width: 2500,
      height: 1230,
      download_url: "https://res.cloudinary.com/dbmqhndhc/image/upload/v1739372369/Dessert2025/Dessert-1739372362458.jpg",
    },

    // เพิ่มข้อมูลรูปภาพตามต้องการ
  ]);
  return (
    <div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-md"
                src={item.download_url}
                alt={`Slide ${i}`}
                style={{
                  width: 'auto',
                  height: "100%", // ให้ปรับขนาดตามอัตราส่วนที่ถูกต้อง
                }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper object-cover rounded-md"
      >
        {data2.map((item, i) => (
          <SwiperSlide key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-md"
                src={item.download_url}
                alt={`Slide ${i}`}
                style={{
                  width: "100%", // ทำให้กว้างเท่ากับพื้นที่ที่กำหนด
                  height: 200, // คงอัตราส่วนให้เหมาะสม
                }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCarousel;
