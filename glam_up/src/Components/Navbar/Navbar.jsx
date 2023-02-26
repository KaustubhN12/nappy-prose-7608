import style from "./Navbar.module.css"
import {PhoneIcon, SearchIcon} from "@chakra-ui/icons";
import {ButtonGroup,Button, Box, useStatStyles, Text, Tooltip, HStack} from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { FiUserCheck } from "react-icons/fi";
import { getAuth, signOut } from "firebase/auth";
import { getSignOut } from "../../Redux/Authentication/Action";
import { useEffect, useState } from "react";
import { DrawerCart } from "../../Products/DrawerCart";




const Navbar =({handleChange})=>{

  const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
  const userName = useSelector((store)=>store.AuthReducer.userName);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(getSignOut());
    }).catch((error) => {
      console.log(error)
    });  
    navigate(0)
  }
  const cartNumber = useSelector(store=> {
    return  (store.productReducer.cartData)
 });

    return (
       < div >
     
      <div className={style.container}>
      
      <div className={style.firstsubContainer}> 
      <div style={{width:"35%", border:"0px solid red" , height:"100%", background:"#ff7db0", display:"flex", justifyContent:"center" , alignItems:"center" ,fontWeight:"600" }} >
        <h3>BEAUTY BONANZA Get Your Daily Dose of Amazing Deals</h3>
      </div>
      <div  className={style.topLeft}   style={{width:"35%", border:"0px solid red" , height:"100%", background:"white;", display:"flex" }} >  
        <div><p>Get App</p></div>
        <div><p>Store & Events</p></div>
        <div><p>Gift Card</p></div>
        <div><p>Help</p></div>
      </div>
      
       </div>
            <div className={style.Card}>
          <div >
            <Link to="/"  >
            <img
              style={{cursor:"pointer" ,width:"90px" , height:"37px" }}
             
              src="https://i.ibb.co/1XYt2t1/glamup-2-1.png"
              className={style.card4}
              alt="nykka"
            />
            </Link>
           
           <Link to="/" className={style.pTags} ><p>Categories</p></Link>
           <Link to="/luxe" className={style.pTags} ><p>Luxe</p></Link>
           <Link to="/" className={style.pTags} ><p>Brands</p></Link>           
           <Link to="/" className={style.pTags} ><p>Cosmetic+ Fashion</p></Link>
           <Link to="/" className={style.pTags} ><p>Beauty Advice</p></Link>
            
          </div>
          <div>
            <div className={style.inputContainer}>
            <div style={{height:"30px" , background:"#f4f4f4", width:"30px" , borderRadius:"4px"}} >
            <SearchIcon />
            </div>
              <input
              
                style={{position: "relative",height:"30px"}}
                type="text"
                className={style.input}
                placeholder="Search on Cosmetic+"
              />
            </div>
            <div className={style.card2}>
              
            <ButtonGroup gap='2'>
           {
            isAuth?<Tooltip label="Click to Log Out !" aria-label='A tooltip' bg='pink.400'><Button onClick={handleLogOut} colorScheme='pink' variant='ghost' ><FiUserCheck/><Text marginLeft="10px" fontSize="17px">{userName}</Text></Button></Tooltip>:<Link to={"/login"}><Button colorScheme='pink'>Log In</Button></Link> 
           }
           <Link to={"/cart"}></Link>
             <Box display='flex'> <DrawerCart/>{cartNumber.length!=0?<Text className={style.cartNumber}>{cartNumber.length}</Text>:""}</Box>
          </ButtonGroup>
            </div>
            <div className={style.card3}>
            </div>
          </div>
        </div>

        <div className={style.content}>
          
        </div>
      </div>
  
      </ div>
        
    )
}

export default Navbar;