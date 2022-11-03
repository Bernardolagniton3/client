import React, { Fragment,useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
import useLocalStorage from '../../hooks/setlocalstorage'
import '../../App.css'
import * as Constants from "./svg.js";

const ProfileHeader = (props) => {
  console.log('props',props)
  console.log('userName', props.data?.userAccess)
  
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [profile, setProfile] = useState([]);
    const [profileName, setProfileFamily] = useState([]);
    const [reports, setReports] = useLocalStorage("reports", []);
    
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('profile'));
      if (items) {
          setProfile(items);
          setProfileFamily(items?.familyName)
      }
      }, [profileName]);

    const logout = (e) =>{
      e.preventDefault();
      window.sessionStorage.clear();
      window.localStorage.clear();
      window.location.href = "/";
    }  

    const fetchReports =  (e) => {
      e.preventDefault();
       fetch("http://localhost:8000/report",{
        method: "GET",
    }).then(response => {
        return response.json();
        
    }).then(data => {
      /*   setData(data)  */
        setReports(data)
        console.log("DATA graphqlDATA graphqlDATA graphqlDATA graphqlDATA graphql",data);
        if(data){
          window.location.href = "/report";
        }
       
    })
  }
    return (
        <div className="container-header">
          <div className="top">
            <div className="top-menu">
              <nav className="top-right">
                {/* <span>{Constants.findStoreIcon}</span>
                <a href="#0">Find a store</a>
                 */}
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
                 {/*  { props.data?.userName === 'billy' ? (<> <li className="menu-item">
                    <Link onClick={fetchReports}>Report</Link>
                  </li></>):""} */}
                     { props.data?.userName === 'billy'  ? (<> <li className="menu-item">
                    <Link onClick={fetchReports}>Report</Link>
                  </li></>):""} 
                </ul>
                <div className='row'> 
                <ul className="right-icons">
                 <div className='col-md-3'>
                   <div className="right-Help">
                     <p className='pHelp'>Help<i className="fa fa-chevron-down heighticon" aria-hidden="true"></i></p> 
                     <ul className="right-Help">
                       <li><div className='w232'> For any help contact <i class="fa fa-phone " aria-hidden="true"></i> 08217844</div></li>
                     </ul>
                   </div>
                  </div>

                <div className='col-md-5 textr'>
                  { props.data?.userName === 'billy' ? (<><p className='plogo2'>Admin</p></>):<p className='plogo2'>User</p>}
                </div>
                <div className='col-md-7'>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle posRel11" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <p className='plogo'>{profileName}</p>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link onClick={logout} to="/" className="dropdown-item">Logout</Link> 
                  </div>
                </div>
                
                {/* <li className="user">{Constants.userIcon}</li> */}
                </div>  
                </ul>
                </div>
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
    

export default ProfileHeader