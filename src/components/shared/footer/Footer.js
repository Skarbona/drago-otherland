import React from 'react';
import FooterItem from "./FooterItem";

const Footer = ({footerItems}) => {
    let footerMenu = null;

    if(footerItems) {
        footerMenu = footerItems.map((item,index) => <FooterItem
            key={`footerItem-${index}`}
            id={`footerItem-${index}`}
            item={item}/>);
    }

    return (
        <div className="drago-footer">
            <div className="drago-footer__container">
                {footerMenu}
            </div>
        </div>
    );
};

export default Footer;
