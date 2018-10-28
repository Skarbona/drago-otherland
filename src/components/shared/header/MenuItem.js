import React from 'react';

const MenuItem = ({item}) => {
    return (
        <div className="drago-header__menu-item">
            <a href={item.link} rel="noopener noreferrer" target="_blank">{item.name}</a>
        </div>
    );
};

export default MenuItem;
