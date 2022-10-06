import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  // return <div>NotFound</div>

  // automatic navigate to homepage
  // return <Navigate to='/' />

  // after a second, naviagate to homepage
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/') // navigate('-1')  back to previous page
      
    }, 1000)
  }, [])

  return <div>No found</div>
}
