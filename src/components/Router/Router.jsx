import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { navigation } from './navigation'
import Layout from '../../pages/Layout/Layout'
import NotFound from '../../pages/NotFound'
// import { useSelector } from 'react-redux'
// import { authStatus } from '../Forms/userSlice'
// import SelectCourse from '../../pages/SelectCourse'
import QuizLayout from '../../pages/Layout/QuizLayout'
import AuthenticationField from '../../pages/AuthenticationField'



const BrowserRoutes = () => {
    // const user = useSelector(authStatus)
    
      //To render routes conditionally
      //But the user parameter is set by firebase so we have to find a way of maintaining the user 
      //Plus we cant do it locally since every time the component tree re-renders wethe user state is reset to default
      // const AppRoutes = navigation.map((r) => {
      //   if(r.isPrivate && user){
      //     return (
      //       <Route path = '/app' element = { <QuizLayout />}>
      //           <Route path = {r.path} element = {r.element}/>
      //       </Route>
      //     )
      const AppRoutes = navigation.map((r) => {
        // if(r.isPrivate === true){
        //       return (
        //         <Route path = '/app' element = { <QuizLayout />}>
        //             <Route path = {r.path} element = {r.element}/>
        //         </Route>
        //       )
        // }else if( r.isPrivate !== true ){
          return (
                    <Route path = '/app' element = { <QuizLayout />}>
                        <Route path = {r.path} element = {r.element}/>
                    </Route>
                  )
        // }else{
        //   return true
        // }
      })
      const router = createBrowserRouter(createRoutesFromElements(
        <Route path = '/' element = {<Layout />}>
                <Route index element = { <AuthenticationField /> } />
                 {AppRoutes}
                
              <Route path='*' element={<NotFound />} />
        </Route> 
      ))
    return(
        <RouterProvider router = { router } />
    )
}

const Router = () => {
  return (
    <BrowserRoutes />
  )
}

export default Router