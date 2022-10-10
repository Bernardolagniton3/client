import { Route, Routes } from 'react-router-dom' 
import Home from './components/Home'
import Login from './components/user/Login'
import Profile from './components/user/Profile'  
 
function App() {
  return (
    <>
     
     <Routes> 
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>   
    </Routes>
    </>
  );
}

export default App;
