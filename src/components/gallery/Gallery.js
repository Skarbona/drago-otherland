import React from 'react';

import Slider from "react-slick";

const Gallery = ({galleryItems}) => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    let items = null;

    if(galleryItems) {
        items = galleryItems.map((item,index)=>{
            return <div
                key={`gallery-${index}`}
                className="drago-slider-item__gallery-item"
            >
                <img src={item} alt={`gallery-${index}`}/>
            </div>
        })
    }

    return (
        <div className="drago-slider-item__gallery">
            <Slider {...settings}>
                {items}
            </Slider>
        </div>
    );
};

export default Gallery;
