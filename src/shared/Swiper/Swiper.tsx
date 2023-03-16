import { nanoid } from "nanoid";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";

interface ISwiperProps {
    children: React.ReactNode[] | string[];
    buttonStyle: string;
    classname: string;
}

export function Slider({ children, buttonStyle, classname }: ISwiperProps) {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className={`mySwiper ${buttonStyle} ${classname}`}>
                {children.map(child => <SwiperSlide key={nanoid()}>{child}</SwiperSlide>)}
            </Swiper>
        </>
    )
}