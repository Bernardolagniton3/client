import React, { Fragment, useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { gql, useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom' 
import useLocalStorage from '../../hooks/setlocalstorage'
import MetaData from '../layout/MetaData'
import Header from '../layout/Header'
const allResult = gql `
query ExampleQuery($username: String, $password: String) {
  
    getUser(username: $username, password: $password) {
      id
      username
      password
      opt
      authorizationtoken
      items {
        firstname
        lastname
        mobile
        title
        location
        balanceRecord
        payment
        datecreation
        gender
        birthday
        record
        fullname
        phoneNumber
        emailAddress
      }
    }
  }
`;

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userRecord, setUserRecord] = useState({});
    const [otpvalue, setOtpvalue] = useState('');  
    const [show, setShow] = useState(false);
    const [userProfile, setUserProfile] = useLocalStorage("profile", [])
    const submitHandler = (e) => {
        e.preventDefault();
        checkUser({ variables: { username:username, password:password }});  
    }
    


    const [checkUser,  { loading, error, data }] = useLazyQuery(allResult, {});
 
     useEffect(() => {
      if(data) {
        const {
            getUser: { items }
         } = data;
         setUserRecord(items)
         setUserProfile(items)
         setShow(true)
    }
    
},[data, username, password, userRecord]) 

  
const LogOtp = ({mobile}) => {
    const [mobileNumber, setMobileNumber] = useState(mobile);
    const submitHandlerOtp = (e) => {
        e.preventDefault();   
        if(otpvalue === mobile){
            return navigate("/profile");
          } 
    }
    return (
        <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submitHandlerOtp} encType='multipart/form-data'>
            <h1 className="mb-3">Login with an OTP</h1>
          
             
            <div className="form-group">
                
                <input
                    type="name"
                    id="otp_field"
                    className="form-control"
                    value={otpvalue}
                    onChange={(e) => setOtpvalue(e.target.value)}
                />
            </div>
            <div className="row"> 
            
            <div className="col-6"> 
            <button
                id="register_button"
                type="submit"
                className="btn btn-block py-3"
               
            >
                Send OTP
            </button>
            </div>
            </div>
        </form>
    </div>
    )
   }

    return (
        <Fragment>
            <Fragment>
                <MetaData title={'Login'} />
                <Header/>
                <div className="row wrapper">
                    {show ? (<> {userRecord.map((item, id)=>(
                               <LogOtp key={id} data={item} mobile={item.mobile} />
                          ))} </>)
                          :
                    <div className="col-10 col-lg-5">
                        <form className="shadow-lg p-3 mb-5 bg-white rounded" onSubmit={submitHandler}>
                            <h1 className="mb-3">Login</h1>
                            <div className="form-group">
                                <label className="labelspan" htmlFor="email_field">Cell Number or email/username</label>
                                <input
                                    type="text"
                                    id="email_field"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
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
                            <div className='row'>
                                <div className="col-6">
                                    <button
                                        id="login_button"
                                        type="submit"
                                        className="btn btn-block py-3"
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                       }
                </div>
            </Fragment>
        </Fragment>
    )
}

export default Login
