import { Route, Routes } from 'react-router-dom' 
import Report from './components/reports/Report'
import { APIContextProvider } from './components/reports/Apicontext'
import LoginMain from './components/user/LoginMain'
import LoginOtpEnter from './components/user/LoginOtpEnter'
import Profile from './components/user/Profile'  
import Protected from './utils/Protected'


function App() {
  return (
    <>
     <APIContextProvider>
      <Routes> 
     
       <Route path="/" element={<LoginMain/>}/>  
       <Route element={<Protected/>}>
       <Route path="/report" element={<Report/>}/> 
       <Route path="/LoginOtpEnter" element={<LoginOtpEnter/>}/>   
       <Route path="/profile" element={<Profile/>}/> 
       </Route> 
     </Routes>
    </APIContextProvider>
    </>
  );
}

export default App;
