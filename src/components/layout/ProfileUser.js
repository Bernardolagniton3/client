import React, { Fragment,useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

import '../../App.css'
import * as Constants from "./svg.js";
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ProfileUser = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div className="container-header">
          <div className="top">
            <div className="top-menu">
             <nav className="top-left">
               <span className='border-logo'>{Constants.personalIcon}</span>
                 <a href="#0">Personal</a>
                   
                </nav>
                  <nav className="top-right">
                  <span className='border-logo'>{Constants.findStoreIcon}</span>
                    <a href="#0">Find a store</a>
                  <span className='border-logo'>{Constants.networkIcon}</span>
                    <a href="#0">Network Status Checker</a>
                  </nav>
             </div>
          </div>
        <div className="main">
          <div className="main-menu">
            <div className="logo">
             <Link to={`${process.env.PUBLIC_URL}/`}>{Constants.logo}</Link>
            </div>
              <div className="menu-list">
                <ul
                  className={click ? "header-menu active" : "header-menu"}
                  onClick={handleClick}
                >
                 
                  <li className="menu-item">
                    <Link to={`${process.env.PUBLIC_URL}/list`}>Services</Link>
                  </li>
                   
                </ul>
                <ul className="right-icons">
                  <li className="user">{Constants.userIcon}</li>
                </ul>
              </div>
              <div
                className={click ? "burger active" : "burger"}
                onClick={handleClick}
              >
                {Constants.burgerIcon}
              </div>
              <div
                className={click ? "close" : "close active"}
                onClick={handleClick}
              >
                {Constants.closeIcon}
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export default ProfileUser