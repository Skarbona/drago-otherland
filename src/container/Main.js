import React, { Component } from 'react';

import axios from 'axios';

import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import MainBody from './MainBody/MainBody';

import Loading from '../components/UI/Loading/Loading';

class Main extends Component {
   state = {
       headers: [],
       footers: [],
       sliders: [],
       extra_data: {},
       loadingHeader: false,
       loadingFooter: false,
       loadingSlider: false,
       loadingExtraData: false,
   };

   componentDidMount = () => {
        axios.get('./json/header.json')
            .then(response => {
                this.setState({
                    headers: response.data,
                    loadingHeader: false,
                })
            })
            .catch(error => console.log(error));

       axios.get('./json/footer.json')
           .then(response => {
               this.setState({
                   footers: response.data,
                   loadingFooter: false,
               })
           })
           .catch(error => console.log(error));

       axios.get('./json/slider.json')
           .then(response => {
               this.setState({
                   sliders: response.data,
                   loadingSlider: false,
               })
           })
           .catch(error => console.log(error));

       axios.get('./json/extra-data.json')
           .then(response => {
               this.setState({
                   extra_data: response.data,
                   loadingExtraData: false,
               })
           })
           .catch(error => console.log(error));
   };


    render() {

        const  {
            loadingHeader, loadingFooter, loadingSlider, loadingExtraData,
            headers, footers, sliders, extra_data
        } = this.state ;

        let content = <Loading />;

        if(!loadingHeader && !loadingFooter && !loadingSlider && !loadingExtraData) {
            content = (
                <React.Fragment>
                    <Header menuItems={headers} />
                    <MainBody sliders={sliders} />
                    <Footer footerItems={footers}
                            copyright={extra_data.copyright}
                    />
                </React.Fragment>
            );
        }

        return (
            <div className="drago-otherland__component">
                {content}
            </div>
        );
    }
}

export default Main;
