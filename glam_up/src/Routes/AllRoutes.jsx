import {Routes, Route} from "react-router-dom";
import home from "../Pages/home";
import Signup from "../Pages/Signup";
import Payment from "../Pages/Payment";
//import Face from "../Face/Face";
//import Thankx from "../Payment/Thankx";
//import LogInComponent from "../SignInPage/Login";


const AllRoutes =()=>{
    return (
       <Routes>
        <Route   path="/"  element={< Home />}  ></Route>
        <Route   path="/cart"  element={< CartDrawer />}   ></Route>
        <Route   path="/signIn"  element={< SignIn />}    ></Route>
        <Route   path="/payment"  element={< Payment />}  ></Route>
         <Route path="/face" element={<Face />} ></Route>
         <Route path="/thanks" element={<Thankx />} ></Route>
         <Route path="/login"  element={<LogInComponent />} ></Route>
       </Routes>
    )
}

export default AllRoutes;