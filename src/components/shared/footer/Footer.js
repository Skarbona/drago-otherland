import React from 'react';
import FooterItem from "./FooterItem";

const Footer = ({footerItems, copyright}) => {
    let footerMenu = null;
    let copyrights = null;

    if(footerItems) {
        footerMenu = footerItems.map((item,index) => <FooterItem
            key={`footerItem-${index}`}
            id={`footerItem-${index}`}
            item={item}/>);
    }
    if(copyright){
        copyrights = (
                <a href={copyright.link} target="_blank" rel="noopener noreferrer">
                    {copyright.text}
                </a>
        );
    }

    return (
        <div className="drago-footer">
            <div className="drago-footer__container">
                {footerMenu}
            </div>
            <div className="drago-footer__copyright">
                {copyrights}
            </div>
        </div>
    );
};

export default Footer;
