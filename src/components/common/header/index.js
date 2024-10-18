import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header_container">
      <div className="header_content">

        <div><img src="/image/logo-YTS.svg" alt="logo-YTS.svg"/></div>

        <div className="header_menu">
          <div>
            <input className="search_input_style" type="text"placeholder="Quick search"/>
          </div>
          <div>Home</div>
          <div className="primary_color">4K</div>
          <div>Browse movies</div>
        </div>

      </div>
    </div>
  );
}

export default Header;
