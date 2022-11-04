import React, { Fragment   } from 'react'
 
const ChildBalance = (props) => {
    const totalRemaining = props.data?.balances?.[0].totalRemaining;
    const totalRemainingData = props.data?.balances?.[1].totalRemaining;
    const totalRemainingSMS = props.data?.balances?.[2].totalRemaining;
    const totalRemainingMMS= props.data?.balances?.[4].totalRemaining;
  return (
      <Fragment>
              <Fragment>
              
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
                                            <div className='small text-height-1 pos-r7'>{totalRemaining}</div>
                                        </div> 
                                        <div className='col-md-3'> 
                                            <div className='small text-height-1 pos-r7'>{totalRemainingData}</div>
                                        </div> 
                                        <div className='col-md-3'> 
                                        <div className='small text-height-1 pos-r7'>{totalRemainingSMS}</div>
                                        </div> 
                                        
                                        <div className='col-md-3'> 
                                            <div className='small text-height-1 pos-r7'>{totalRemainingMMS}</div>
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
           
              </Fragment>
      </Fragment>
  );
}
 
export default ChildBalance



