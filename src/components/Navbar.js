import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// hamay Components hamesha capital letter se bnany ho ga
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode}  bg-${props.mode}  navbar-expand-lg `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            {/* can use capital or small letter in link */}
              <Link className="nav-link" to="/About"> 
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* //fucking ternioray operator */}
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`} >
            {/* <div className={`form-check form-switch text-${props.btnColor}`} > */}
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//ham Proptypes is lye use rty ha ta k ham props mn string ki jagah galti se koi number send na kr day or error aa jaye
//hamay pehla 'impt' use kr k pehla use imprt krna prta ha phr use krna prt aha
// PropTypes object hota ha jitna zyada props bhejay ga un=ta hi PropTypes bnaye ga
/// remember the syntax
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  //JAB HAM isrequired use krty haint ou hamay us mn koi value pass krni lazmi ha chahy bydefault props   ya simple pROPS k
  aboutText: PropTypes.string,
};
// we can use DEFA props
// ise use kr k hamay  app.js  mn navbar mn props use krna nhi pra ga
//we dont need to imprt any thing to use default prps

// Navbar.defaultProps = {
//     title: "set title here",
//     aboutText: "set about here",

// }
