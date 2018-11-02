import React from 'react';

const FooterItem = ({item}) => {
    return (
        <div className="drago-footer-item">
            <a href={item.link} rel="noopener noreferrer" target="_blank">
                <img src={item.icon} alt={item.name} />
            </a>
        </div>
    );
};

export default FooterItem;
