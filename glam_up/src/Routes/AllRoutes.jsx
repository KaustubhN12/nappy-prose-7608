import {Routes, Route} from "react-router-dom";
import AddProduct from "../Admin/AddProduct";
import RemoveProduct from "../Admin/RemoveProduct";
import Admin from "../Pages/Admin";
import Home from "../Pages/home";
import SimpleCard from "../Pages/Login";
import SignupCard from "../Pages/Signup";
import HairPage from "../Products/HairPage";
import Makeup_page from "../Products/Makeup_page";
import SingleProductPage from "../Products/SingleProductPage";
import SkinPage from "../Products/SkinPage";
// import CartDrawer from "../CartPage/Cart";
// import SignIn from "../SignInPage/SignIn";
// import Payment from "../Payment/Payment";
// import Face from "../Face/Face";
// import Thankx from "../Payment/Thankx";
// import LogInComponent from "../SignInPage/Login";


const AllRoutes =()=>{
    return (
       <Routes>
         <Route path="/"  element={< Home />}  ></Route>
         {/* <Route path="/cart"  element={< CartDrawer />}   ></Route> */}
         <Route path="/signIn"  element={< SignupCard />}    ></Route>
         {/* <Route path="/payment"  element={< Payment />}  ></Route> */}
         {/* <Route path="/face" element={<Face />} ></Route> */}
         {/* <Route path="/thanks" element={<Thankx />} ></Route> */}
         <Route path="/login"  element={<SimpleCard />} ></Route>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/admin/add-product" element={<AddProduct/>}/>
         <Route path="/admin/remove-product" element={<RemoveProduct/>}/>
         <Route path="/makeup" element={<Makeup_page />}></Route>
         <Route path="/:page/:id" element={<SingleProductPage />}></Route>
         <Route path="/skin" element={<SkinPage />}></Route>
         <Route path="/hair" element={<HairPage/>}></Route>
       </Routes>
    )
}

export default AllRoutes;