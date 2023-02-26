import { Heading } from "@chakra-ui/react";
import {Routes, Route} from "react-router-dom";
import AddProduct from "../Admin/AddProduct";
import RemoveProduct from "../Admin/RemoveProduct";
import Address from "../Pages/AddressPage/Address";
import Admin from "../Pages/Admin";
import AdminLogin from "../Pages/AdminLogin";
import CartItem from "../Pages/CartPage/Components/CartItem";
import Home from "../Pages/home";
import SimpleCard from "../Pages/Login";
import OrderSuccessfull from "../Pages/OrderSuccessfull";
import PaymentPage from "../Pages/PaymentPage";
import SignupCard from "../Pages/Signup";
import LuxePage from "../Pages/SkinPage";
import HairPage from "../Products/HairPage";
import Makeup_page from "../Products/Makeup_page";
import SingleProductPage from "../Products/SingleProductPage";
import SkinPage from "../Products/SkinPage";

const AllRoutes =()=>{
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignupCard />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/login" element={<SimpleCard />}></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/remove-product" element={<RemoveProduct />} />
        <Route path="/makeup" element={<Makeup_page />}></Route>
        <Route path="/:page/:id" element={<SingleProductPage />}></Route>
        <Route path="/skin" element={<SkinPage />}></Route>
        <Route path="/hair" element={<HairPage />}></Route>
        <Route path="/cart" element={<CartItem />} />
        <Route path="/luxe" element={<LuxePage />} />
        <Route path="/address" element={<Address />} />
        {/* <Route path="/payment" element={<PaymentPage />} /> */}
        <Route path="/ordersuccessfull" element={<OrderSuccessfull />} />

        <Route path="*" element={<Heading>Page Not found</Heading>}></Route>

         <Route path="/admin-login" element = {<AdminLogin/>}/>

      </Routes>
    );
}

export default AllRoutes;