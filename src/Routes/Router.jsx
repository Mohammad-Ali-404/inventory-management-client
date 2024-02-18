import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Electronics from "../Pages/Electronics/Electronics";
import TechGadget from "../Pages/TechGadget/TechGadget";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"eletronics",
                element:<Electronics/>
            },
            {
                path:"gadget",
                element:<TechGadget/>
            }
                
        ]
    }
])
export default router;