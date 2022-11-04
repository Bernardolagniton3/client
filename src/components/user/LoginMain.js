import React, { Fragment, useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Constants from "../layout/svg.js"
import "./profile.css"
import "./LoginMain.css"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userLoginAction.js'

const LoginMain = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // eslint-disable-next-line   
    const {loading, isAuthenticated, otp, error} = useSelector(state => state.auth)
    const [userName, setUserName] = useState();
    const [numberTrue, setNumberTrue] = useState(true);
    const [password, setPassword] = useState();
    const [phoneNumber, setMs] = useState();
    const [ValitOtp, setValitOtp] = useState();
    window.sessionStorage.clear();
    useEffect(() => {
        if(otp){
        setValitOtp(otp)
        }
     }, [dispatch, isAuthenticated, otp]);
     
    const isNumber = (str) => {
    if (str.trim() === '') {
      return false;
    }
  
    return !isNaN(str);
  }
     
  const handleChange = event => {
      if (isNumber(event.target.value)) {
                setNumberTrue(true) 
                //setUsernameString(false)
                setMs(event.target.value);
            console.log('✅ It is a valid number');
        } else {
            console.log('⛔️ It is NOT a valid number');
                setNumberTrue(false) 
               // setUsernameString(true)
                setUserName(event.target.value);
        } 
  };  

  const submitHandler = (e, otp) => {
       e.preventDefault();
       dispatch(login(phoneNumber, password))
       //window.location.href = "/LoginOtpEnter";
       navigate('/LoginOtpEnter',{state:{id:1,phoneNumber:phoneNumber, ValitOtp:ValitOtp}});
  };
  
    return (
        <Fragment>
            <Fragment>
          
               <div className="row wrapper">
               <div className="col-10 col-lg-5">
                   <form className="shadow-lg p-3 mb-5 bg-white rounded" onSubmit={submitHandler}>
                    <div className='row'>
                     <div className="logo marCenter">
                       <Link to={`${process.env.PUBLIC_URL}/`}>{Constants.logo}</Link>
                     </div>
                    </div>
                       <h1 className="mb-3">Login</h1>
                       <div className="form-group">
                           <label className="labelspan" htmlFor="email_field">Cell Number/Username</label>
                           {numberTrue ? ( 
                           <>
                          <div className='row'>
                          <div className='col-md-2'>
                          <input
                               type="text"
                               id="areacode"
                               className="form-control w70"
                               value={"(082)"}
                           />
                           </div>
                           <div className='col-md-10'>
                           <input
                               type="text"
                               id="email_field"
                               className="form-control"
                               value={phoneNumber}
                               //onChange={(e)=> handleChange(idMask(e))}
                               onChange={(e) => setMs(e.target.value)}
                           />
                           </div>
                            </div>   
                           </>):<input
                               type="text"
                               id="email_field"
                               className="form-control"
                               value={userName}
                               onChange={handleChange}
                           />
                          }
                       </div>
                       <div className="form-group">
                           <label className="labelspan" htmlFor="password_field">Password</label>
                           <input
                               type="password"
                               id="password_field"
                               className="form-control"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                           />
                       </div>
                       {otp == null ? (<><div className='row'><p className='redColor'>Please enter a valid Username and Password</p></div></>) : "" }
                       <div className='row'>
                           <div className="col-12">
                               <button
                                   id="login_button"
                                   type="submit"
                                   className="btn btn-block py-3 btndesign"
                               >
                                   <span className='fa fa-sign-in marLR'></span>
                                   OK
                               </button>
                           </div>
                       </div>
                   </form>
               </div>
               </div>
              
             
                  
            
            </Fragment>
        </Fragment>
    )
}

export default LoginMain
