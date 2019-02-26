import React, { Component } from "react";

const Header = (props) => (
    <header className='top'>
        <h1 className="top">Juice Cafe</h1>
        <h3 className="tagline">
          <span>{props.tagline}</span>
        </h3>
      </header>

)
export default Header;