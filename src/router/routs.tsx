import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../components/notfound";

const Routs = ()=>{
    return useRoutes([
        {path:"/",element:<Home/>},
        {path:"*",element:<NotFound/>}
    ])
}
export default Routs;