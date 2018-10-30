import React, {Component} from 'react';

import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';

import Divider from '../../assets/img/elements/underscore.png';

import Gallery from '../../components/gallery/Gallery';

class MainBody extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { sliders } = this.props;

        let sliderItems = null;


        if(sliders) {
            sliderItems = sliders.map((item,index) => {

                let video = null;
                let gallery = null;
                let title = null;
                let conf = item.configuration;

                let classes = ["drago-slider-item__background"];


                if(conf) {
                    if(conf.title.show) {
                        title = (
                            <div className="drago-slider-item__title">
                                <h2>{item.title}</h2>
                                <img src={Divider} alt="divider" />
                            </div>
                        );
                    }
                    if(conf.video.show) {
                        let id = conf.video.videoID;
                        let url = `https://www.youtube.com/embed/${id}`;
                        video = (
                            <div className="video__embed-responsive">
                                <iframe title={id} src={url} className="embed-responsive-item"></iframe>
                            </div>
                        );
                        classes.push("drago-slider-item__with-video")
                    }
                    if(conf.gallery.show) {
                        gallery = <Gallery galleryItems={conf.gallery.galleryItems}/>
                    }
                }


                return (
                       <div
                           key={`slider-${index}`}
                           className="drago-slider-item"
                       >
                           <div className={classes.join(" ")}
                                style={{backgroundImage: `url(${item.image})`}}
                           >
                               <div className="drago-slider-item__wrapper">
                                   {video}
                                   <div className="drago-slider-item__content">
                                           {title}
                                           {ReactHtmlParser(item.text)}
                                           {gallery}
                                   </div>
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
