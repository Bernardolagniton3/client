import React, { Fragment  } from 'react'
import './balancevoice.css'
const BalanceVoice = (props) => {
 

    const Voicebundlename = props.data[0]?.bundle;
    const contentBundle = Voicebundlename?.map(item => {
      return(         
            <div key={item.name} className='row'>
            <div className='col-md-3'>
               <h4 className='small text-height-1 textLabel'>Bundle Name: </h4>
            </div>
              <div className='col-md-9'>
                 <h4 className='small text-height-1 textbn pos-r34'>{item.name} </h4>
                 
              </div>
              <div className='col-md-4'>
                  <div className='statr'>
                  <h4 className='small text-height-1 textLabel'>Remaining </h4>
                  <div className='small text-height-1 pos-r7'>{item.remaining}</div>
                  </div>
              </div>
                                                   
              <div className='col-md-4'>
                <div className='stat'>
                  <h4 className='small text-height-1 textLabel'>Expiry Date  </h4>
                  <div className='small text-height-1 pos-r7'>{item.expiryDate}</div>
                 </div> 
              </div>
              <div  className='col-md-4'>
                 <div className='statl'>
                  <h4 className='small text-height-1 textLabel'>Expiry Time </h4>
                  <div className='small text-height-1 pos-r7'>{item.expiryTime}</div>
                  </div>
             </div>

          
          </div>
          
      )
  })
   
 
    return (
        <Fragment>
                <Fragment>
                <div className="col-xl-6 col-md-6 text-left mb-md-2">
                            <div className="card cardBor">
                                <div className="card-content">
                                        <div className="card-body">
                                             <div className="media d-flex">
                                                <div className="media-body">
                                                    <h3 className="danger pos-l4 color1">Voice </h3>
                                                      <div className='row'>
                                                         {contentBundle} 
                                                      </div>
                                                    </div>
                                                    <div className="align-self-center">
                                                       <i className="icon-direction danger font-large-2 float-right"></i>
                                                  
                                                    </div>
                                                </div>
                                                </div>
                                             </div>
                                            </div>
                                 </div>
                     
                </Fragment>
        </Fragment>
    );
}
export default BalanceVoice
