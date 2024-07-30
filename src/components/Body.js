import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './Search'
import Home from './Home'

const Body = () => {
  const appRoute = createBrowserRouter([
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/search',
        element:<Search/>
      }
    ])
    
  return (
    <RouterProvider router={appRoute}/>
  )
}

export default Body