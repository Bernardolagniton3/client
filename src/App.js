import { Route, Routes } from 'react-router-dom' 
import Report from './components/reports/Report'
 
import LoginMain from './components/user/LoginMain'
import LoginOtpEnter from './components/user/LoginOtpEnter'
import Profile from './components/user/Profile'  

function App() {
  return (
    <>
     
      <Routes> 
       <Route path="/" element={<LoginMain/>}/>  
       <Route path="/report" element={<Report/>}/> 
       <Route path="/LoginOtpEnter" element={<LoginOtpEnter/>}/>   
       <Route path="/profile" element={<Profile/>}/>  
     </Routes>
    
    </>
  );
}

export default App;
