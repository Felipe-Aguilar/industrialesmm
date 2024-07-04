'use client';

import React from "react";
import Slider from "react-slick";

import style from './galeria.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Galeria = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const images1 = [ 
        {image: '2.webp'},
        {image: '3.webp'},
        {image: '4.webp'},
        {image: '5.webp'},
    ]

    const images2 = [ 
        {image: '6.webp'},
        {image: '7.webp'},
        {image: '8.webp'},
        {image: '9.webp'},
    ]

    return ( 
        <div className={style.Galeria} id="#galeria">
            <h2>Galería</h2>

            <Slider {...settings} className={style.Slide}>
                {images1.map((image)=>(
                    <Image 
                        key={image.image}
                        src={`/images/${image.image}`}
                        alt="Nuestros servicios"
                        width={1000}
                        height={800}
                        priority={false}
                        quality={100}
                    />
                ))}
            </Slider>

            <Slider {...settings} className={`${style.Slide} ${style.Slide2}`}>
                {images2.map((image)=>(
                    <Image 
                        key={image.image}
                        src={`/images/${image.image}`}
                        alt="Nuestros servicios"
                        width={1000}
                        height={800}
                        priority={false}
                        quality={100}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default Galeria;