import React, { Fragment  } from 'react'
 
const TotalRemaining = (props) => {
    //const total = props.data[0].totalRemaining;
const voice = props.data[0]?.totalRemaining;
const data = props.data[1]?.totalRemaining;   
const sms = props.data[2]?.totalRemaining; 
const mms = props.data[3]?.totalRemaining;   


   console.log("voice", voice)
   console.log("data", data)
   console.log("sms", sms)
   console.log("mms", mms)
/* 
    const contentTotalRemaining = data?.map((item, index) => {
        return(         
            <div key={index} className='col-md-3'> 
            <div className='small text-height-1 pos-r7'>{sms}</div>
            </div> 
            
        )
    })
      */
   
    return (
        <Fragment>
                <Fragment>
                         
                <div className="col-xl-5 col-lg-5">
                <div className="card height230 shadow mb-4">
                <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">TOTAL REMAINING</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-pie">
                            <div className="card-body pad0">
                                    <div className='row'>
                                        <div className='col-md-3'>
                                        <h4 className='small text-height-1 textLabel'>Voice </h4>
                                        </div>
                                    
                                        <div className='col-md-3'>
                                        <h4 className='small text-height-1 textLabel'>Data </h4>
                                        </div>
                                        <div  className='col-md-3'>
                                        <h4 className='small text-height-1 textLabel'>SMS </h4>
                                        </div>
                                        <div  className='col-md-3'>
                                        <h4 className='small text-height-1 textLabel'>MMS </h4>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='col-md-3'> 
                                            <div className='small text-height-1 pos-r7'>{voice}</div>
                                        </div> 
                                        <div className='col-md-3'> 
                                            <div className='small text-height-1 pos-r7'>{data}</div>
                                        </div> 
                                        <div className='col-md-3'> 
                                        <div className='small text-height-1 pos-r7'>{sms}</div>
                                        </div> 
                                        
                                        <div className='col-md-3'> 
                                            <div className='small text-height-1 pos-r7'>{mms}</div>
                                        </div> 
                                    {/* {BundleTotal.map(function(item){
                                        return (
                                            <>
                                        
                                        <div key={item} className='col-md-3'> 
                                            <div className='small text-height-1 pos-r7'>{item.totalRemaining}</div>
                                        </div> 
                                        </>
                                        )
                                        })}  */}
                                    
                                        
                                    </div>
                                </div>
                            <ul>
                            {/*  {Object.keys(profileName).map(
                                (objKey) =>
                                    <li key={objKey}>{profileName[objKey]}</li>
                            )} */}
                       </ul>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
                </Fragment>
        </Fragment>
    );
}
export default TotalRemaining
