import React, { useEffect } from 'react'
import { selectLoggedInUser, signOutAsync } from '../authSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';



const LogOut = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser)

    useEffect(()=>{
      dispatch(signOutAsync())
    })


  return (
    <>
      {!user && <Navigate to='/login' replace={true} ></Navigate>}
    </>
  )
}

export default LogOut
