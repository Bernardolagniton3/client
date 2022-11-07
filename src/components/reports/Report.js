import React, { Fragment, useState, useEffect} from 'react'
import "./reports.css"
import { useAPI } from './Apicontext' 
import Header from '../layout/Header' 
import {  useSelector } from 'react-redux'

const Report = () => {
    const { reportsData } = useAPI();
    // eslint-disable-next-line 
    const [TimeStamp, setTimeStamp] = useState(''); 
    // eslint-disable-next-line 
    const { isAuthenticated, otp   } = useSelector(state => state.auth)
     // eslint-disable-next-line 
    const {loading, reports, error} = useSelector(state => state.reports)

    useEffect(() => {
        const timestamp = Date.now(); // This would be the timestamp you want to format
        const value = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        console.log('v', value)
        setTimeStamp(value)
 }, []);
     return (
        <Fragment>
            <Fragment>
                <Header/>
                  <div className="container">          
                            <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">REPORT</h6>
                                        <h6 className="m-0 font-weight-bold text-primary float-right text-dark">{TimeStamp}</h6>
                                    </div>
                                      <div className="row pad20">
                                          <div className="col-md-4 col-xl-3">
                                              <div className="card bg-c-blue order-card">
                                                  <div className="card-block">
                                                      <h6 className="m-b-20">Login Attempts</h6>
                                                      <h2 className="text-right"><i className="fa fa-sign-in f-left"></i><p>{reportsData.loginAttempts} Times</p></h2>
                                                      <p className="m-b-0"> <i className="f-right"></i></p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-4 col-xl-3">
                                              <div className="card bg-c-green order-card">
                                                  <div className="card-block">
                                                      <h6 className="m-b-20">Successful Logins</h6>
                                                      <h2 className="text-right"><i className="fa fa-check f-left"></i><p>{reportsData.successfulLogins} Times</p></h2>
                                                      <p className="m-b-0"> <i className="f-right"></i></p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-4 col-xl-3">
                                              <div className="card bg-c-yellow order-card">
                                                  <div className="card-block">
                                                      <h6 className="m-b-20">Help Button Used</h6>
                                                      <h2 className="text-right"><i className="fa fa-refresh f-left"></i><p>{reportsData.helpButtonUsed} Times</p></h2>
                                                      <p className="m-b-0"><i className="f-right"></i></p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-4 col-xl-3">
                                              <div className="card bg-c-pink order-card">
                                                  <div className="card-block">
                                                      <h6 className="m-b-20">OTP Failures</h6>
                                                      <h2 className="text-right"><i className="fa fa-exclamation-triangle f-left"></i><p>{reportsData.otpFaliures} Times </p></h2>
                                                      <p className="m-b-0"><i className="f-right"></i></p>
                                                  </div>
                                              </div>
                                          </div>      
                                    </div>
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">QUERIES</h6>
                                    </div>
                                    <div className="row pad2060">   
                                          <div className="col-md-4 col-xl-4">
                                              <div className="card bg-c-blue order-card">
                                                  <div className="card-block">
                                                      <h6 className="m-b-20">Users</h6>
                                                      <h2 className="text-right"><i className="fa fa-user f-left"></i><p>{reportsData.queriesAttempted?.user} Times</p></h2>
                                                      <p className="m-b-0"><i className="f-right"></i></p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-4 col-xl-4">
                                              <div className="card bg-c-green order-card">
                                                  <div className="card-block">
                                                      <h6 className="m-b-20">Customer Balance</h6>
                                                      <h2 className="text-right"><i className="fa fa-book f-left"></i><p>{reportsData.queriesAttempted?.customerBalance} Times</p></h2>
                                                      <p className="m-b-0"><i className="f-right"></i></p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-md-4 col-xl-4">
                                              <div className="card bg-c-yellow order-card">
                                                  <div className="card-block">
                                                      <h6 className="m-b-20">Child Numbers</h6>
                                                      <h2 className="text-right"><i className="fa fa-phone f-left"></i><div>{reportsData.queriesAttempted?.childNumberBalances} Times </div></h2>
                                                      <p className="m-b-0"><i className="f-right"></i></p>
                                                  </div>
                                              </div>
                                          </div>
                                         </div>
                             </div>
                  </div>

                     {/* queries */}
            </Fragment>
        </Fragment>
        
    )
}

export default Report
