import React, {Component} from 'react';
import Slider from "react-slick";

class MainBody extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { sliders } = this.props;

        let sliderItems = null;

        if(sliders) {
            sliderItems = sliders.map((item,index) => {
                return (
                       <div
                           key={`slider-${index}`}
                           className="drago-slider-item"
                       >
                           <div className="drago-slider-item__background"
                                style={{backgroundImage: `url(${item.image})`}}
                           >
                               <div className="drago-slider-item__content">
                                   <h2>{item.title}</h2>
                               </div>
                           </div>
                       </div>
                );
            });
        }


        return (
            <div className="drago-slider">
                <Slider {...settings}>
                    {sliderItems}
                </Slider>
            </div>
        );
    }
}

export default MainBody;
