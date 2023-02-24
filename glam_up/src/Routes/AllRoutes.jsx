import {Routes, Route} from "react-router-dom";
import AddProduct from "../Admin/AddProduct";
import RemoveProduct from "../Admin/RemoveProduct";

// import CartDrawer from "../CartPage/Cart";
// import SignIn from "../SignInPage/SignIn";
// import Payment from "../Payment/Payment";
// import Face from "../Face/Face";
// import Thankx from "../Payment/Thankx";
// import LogInComponent from "../SignInPage/Login";
import Admin from "../Pages/Admin";
import Home from "../Pages/home";


const AllRoutes =()=>{
    return (
       <Routes>
         <Route path="/"  element={< Home />}  ></Route>
         {/* <Route path="/cart"  element={< CartDrawer />}   ></Route>
         <Route path="/signIn"  element={< SignIn />}    ></Route>
         <Route path="/payment"  element={< Payment />}  ></Route>
         <Route path="/face" element={<Face />} ></Route>
         <Route path="/thanks" element={<Thankx />} ></Route>
         <Route path="/login"  element={<LogInComponent />} ></Route> */}
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/admin/add-product" element={<AddProduct/>}/>
         <Route path="/admin/remove-product" element={<RemoveProduct/>}/>
       </Routes>
    )
}

export default AllRoutes;