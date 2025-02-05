import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/login', element: <LoginPage />}
])

// export Provider ที่ส่งออก props เป็น router
export default function Router(){
    return <RouterProvider router={router} />
}