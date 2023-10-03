import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";



const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('/news.json')
            }
        ]
    }
])

export default routes;