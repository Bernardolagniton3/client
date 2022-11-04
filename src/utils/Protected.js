import { Outlet, Navigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
const Protected = () => {
    const { otp } = useSelector(state => state.auth)
    let auth = JSON.stringify(otp) === JSON.stringify({}) ? {otp: false} : {otp: true}
    return (
        auth.otp ? <Outlet/> : <Navigate to="/"/>
    )
}

export default Protected