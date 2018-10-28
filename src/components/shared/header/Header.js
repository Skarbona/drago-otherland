import React from 'react';

import MenuItem from './MenuItem';

const Header = ({menuItems}) => {

    let menu = null;

    if(menuItems) {
        menu = menuItems.map((item,index) => <MenuItem
            key={`menuItem-${index}`}
            id={`menuItem-${index}`}
            item={item}/>);
    }

    return (
        <div className="drago-header">
            <div className="drago-header__container">
               <div className="drago-header__logo">
                  <img src="./img/otherland-logo.jpg" alt="otherland logo"/>
               </div>
                <div className="drago-header__menu">
                    {menu}
                </div>
            </div>
        </div>
    );
};

export default Header;
