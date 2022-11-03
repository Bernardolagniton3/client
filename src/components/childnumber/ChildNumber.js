import React, { Fragment, useState, useEffect  } from 'react'
 
const ChildNumber = (props) => {
  //console.log(props.isOpen)
 
  const [Tokennew, setToken] = useState();
  const [validate, setValidate] = useState(false);
  const [UserChildBalance, setUserChildBalance] = useState([]);
  const [ChildIndex, setChildIndex] = useState("");
  const [ChildValue, setChildValue] = useState();

  const childbundlename = props.data?.childNumbers;
 
  
  useEffect(() => {
  const getToken = sessionStorage.getItem("token");
  setToken(getToken);
  if (validate) {
      setTimeout(() => {
          submitHandler();
      }, 3000);
  }
  },[])

  props.func(validate);
  props.dataBalance(UserChildBalance);
  props.childval(ChildValue);

  const submitHandler = (event, index) => {
       
       setValidate(!validate);
       setChildIndex(props.data?.childNumbers);
       setChildValue(props.data?.childNumbers[index]);
          const query = `
          query($msisdn: String){
                customerBalance(msisdn: $msisdn) {
                   msisdn
                   balances {
                     serviceType
                     totalRemaining
                     bundle {
                       name
                       remaining
                       expiryDate
                       expiryTime
                     }
                   }
                 }
              }
           
           `;
          fetch("http://localhost:8000/graphql/balancesManagement/serviceBalances",{
               
           method: "POST",
           headers: {
               "Content-Type":"application/json",
               "Accept":"application/json",
               "Authorization" :`Bearer ${Tokennew}`,
           },
           body:JSON.stringify({
               query,
               variables: {
                   msisdn: `${ChildIndex[index]}`
               }
           })
          
      }).then(response => {
          return response.json();
          
      }).then(data => {
        /*   setData(data)  */
          console.log("DATA graphqlDATA graphqlDATA graphqlDATA graphqlDATA graphql",data);
          // setUserProfile(data.data.user);
          setUserChildBalance(data.data.customerBalance);
         
      })
  } 

   const contentBundle = childbundlename?.map((item,index) => {
      return(         
                 <div key={index} className="col-md-3 textbn">
                   
                   <button onClick={event => submitHandler(event, index)} className='borsilver' value={item}>{item} </button>
                 </div> 
      )
  }) 
   

  return (
      <Fragment>
              <Fragment>
               <div className='col-md-9 mr-po27'>
                  <div className='row'>
                  {contentBundle}
                  </div>
              </div>
              </Fragment>
      </Fragment>
  );
}
 
export default ChildNumber
