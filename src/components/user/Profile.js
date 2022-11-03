import React, { Fragment, useState, useEffect } from 'react'
import ProfileHeader from '../layout/ProfileHeader'
import BalanceVoice from '../balance/balanceVoice'
import BalanceData from '../balance/balanceData'
import "./profile.css"
import TotalRemaining from '../total/totalRemaining'
import BalanceSMS from '../balance/balanceSMS'
import BalanceMMS from '../balance/balanceMMS'
import ChildNumber from '../childnumber/ChildNumber'
import ChildBalance from '../balance/childBalance'
import ChildBalanceForm from '../balance/childBalanceForm'
import { useLocation } from 'react-router-dom';
const Profile = () => {
    const location = useLocation();
    const [profile, setProfile] = useState([]);
    const [profileName, setProfileName] = useState([]);
    const [profileFamily, setProfileFamily] = useState([]);
    const [profileTitle, setProfileTitle] = useState([]);
   
    const [profileGender, setProfileGender] = useState([]);
    const [profileBirthday, setProfileBirthday] = useState([]);
    const [profileUserChild, setProfileUserChild] = useState([]);
    const [profileUserChildsec, setProfileUserChildSec] = useState([]);
    const [CustomerBalance, setCustomerBalance] = useState([{}]);
    const [ProfileUserEmail, setProfileUserEmail] = useState([]);
    const [ProfileUserPhone, setProfileUserPhone] = useState([]);
    const [NewProfile, setNewProfile] = useState([]);
 
    const [validateChild, setValidateChild] = useState([]);
    const [ChildForm, setChildForm] = useState([{}]);
    const [ChildVal, setChildVal] = useState([]);
    const validateNew = (data) => {
      setValidateChild(data)
    }
    const UserChildBalance = (data) => {
      setChildForm(data)
    }
    const ChildValue = (data) => {
      setChildVal(data)
    }

    console.log("NewProfile",NewProfile) 
    useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('profile'));
    const customerBalance = JSON.parse(sessionStorage.getItem('balance'));
    console.log("lollol",location.state.phoneNumber) 
    setNewProfile(location.state.phoneNumber)
        setProfile(items);
        setCustomerBalance(customerBalance)
        setProfileName(items?.fullName)
        setProfileFamily(items?.familyName)
        setProfileTitle(items?.title)
        setProfileGender(items?.gender)
        setProfileBirthday(items?.birthDate)
        setProfileUserEmail(items?.contactInfo?.emailAddress)
        setProfileUserPhone(items?.contactInfo?.phoneNumber)
        //child 
        setProfileUserChild(items?.childNumbers?.[0])
        setProfileUserChildSec(items?.childNumbers?.[1])

       
    }, []);
    
     return (
        <Fragment>
            <Fragment>
               
                <ProfileHeader data={{...profile}}/>
                <div className="row wrapper">
                <div className="container">
                      <div className="row shadow-sm">
                        <div className="pr-5 col-md-12 text-left bgnew mb-md-2">
                      {/* profile */}
                        <div className="row">
                            <div className="col-xl-7 col-lg-7">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">INFORMATION</h6>
                                      {/*   {NewProfile.map((item) =>{
                                          return(
                                            <>
                                              <div key={item.userName}>{item.fullName}</div>
                                            </>
                                          )
                                        })} */}
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                          <div className='row col-md-12'>
                                             <h4 className='small textbni'>Full Name: </h4><div className="textbn">{profileTitle}. {profileName}</div>
                                             <h4 className='small textbni'>Family Name: </h4><div className="textbn">{profileFamily}</div>
                                          </div>
                                          <div className='row col-md-12'>
                                             <h4 className='small textbni'>Gender: </h4><div className="textbn">{profileGender}</div>
                                             <h4 className='small textbni'>Birthday: </h4><div className="textbn">{profileBirthday}</div>
                                          </div>
                                          <div className='row col-md-12'>
                                             <h4 className='small textbni'>Phone Number: </h4><div className="textbn">{ProfileUserPhone}</div>
                                             <h4 className='small  textbni'>Email Address: </h4><div className="textbn">{ProfileUserEmail}</div>
                                          </div>
                                         {profileUserChild || profileUserChildsec ? (
                                         <>
                                         <div className='row'>
                                         <div className='col-md-3'>
                                            <h4 className='small textbni'>Child number: </h4> 
                                          </div>                             
                                          <ChildNumber childval={ChildValue} dataBalance={UserChildBalance} func={validateNew}  data={{...profile} }/>  
                                           
                                        </div>
                                         </>):""}
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            {validateChild ? (<>
                             <div className="col-xl-5 col-lg-5">
                              <div className="card height230 shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">{ChildVal} - CHILD NUMBER TOTAL REMAINING</h6>
                                </div>
                                <ChildBalance data={{...ChildForm}}/>
                             </div>
                            </div>
                            </>): <TotalRemaining data={{...CustomerBalance.balances}}/>}
                            {validateChild ? (<>
                              <div className="col-xl-12 col-lg-5">
                               {/* BALANCE PAGE */}
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                      <h6 className="m-0 font-weight-bold text-primary">BALANCE - {ChildVal}</h6>
                                    </div>
                                     <ChildBalanceForm data={{...ChildForm}}/>
                                    </div>
                               </div> 
                            </>):
                            <div className="col-xl-12 col-lg-5">
                               {/* BALANCE PAGE */}
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">BALANCE</h6>
                                    </div>
                                    <div className="card-body">
                                       <div className="chart-bar">
                                        <div className='row'>
                                          <BalanceVoice data={{...CustomerBalance.balances}}/> 

                                          <BalanceData data={{...CustomerBalance.balances}}/> 

                                          <BalanceSMS data={{...CustomerBalance.balances}}/>

                                          <BalanceMMS data={{...CustomerBalance.balances}}/>
                                         </div>
                                     </div>
                                  <hr/>  
                              </div>
                            </div>
                           </div>}
                        </div>
                      </div>
                     </div> 
                    </div>
                  </div>
            </Fragment>
        </Fragment>
    )
}

export default Profile

