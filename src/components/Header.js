import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="wrapper">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);


Header.defaultProps = {
  title: 'Decision Helper'
};

export default Header;