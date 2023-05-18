import RealTime from "../pages/RealTime"
import Login from "../pages/Login"
import Register from "../pages/Register"
import DepEvents from "../pages/DepEvents"
import MyEvents from "../pages/MyEvents"

export const privateRoutes = [
    {path:'/panopticon', element: <RealTime/>},
    {path:'/event-journal', element: <DepEvents/>},
    {path:'/my-events', element: <MyEvents/>},
]

export const publicRoutes = [
    {path:'/login', element: <Login/>},
    {path:'/register', element: <Register/>},
]