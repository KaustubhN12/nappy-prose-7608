import {Box,HStack,} from "@chakra-ui/react"
import styled from "@emotion/styled"
import style from "./Navbar.module.css"
import MenuBar from "./MenuBar"
import { Link } from "react-router-dom"
const SubNavbar = ()=>{
    const Styles = {fontWeight:"600"  }
    return (
        <Box w="100%" border="0px solid red" className={style.SubNavbar}  >
        <HStack  className={styled.SubNavbar} paddingLeft="60px"  paddingRight="60px" spacing='20px' justify="space-around" alignItems="center" display="flex" >
          
          <div class={style.dropdown}>
          <Link to={"/makeup"}>
          <Box style={Styles} w='100%' h='30px' bg='#ffffff' class={style.dropbtn} >Makeup</Box>
          </Link>
          <MenuBar />
            </div>
            <div class={style.dropdown}>
           <Link to={"/skin"}><Box style={Styles}w='100%' h='30px' bg='#ffffff' >Skin</Box></Link>
           <MenuBar />
           </div>
           <div class={style.dropdown}>
            <Link to={"/hair"}><Box style={Styles}w='100%' h='30px' bg='#ffffff' >Hair</Box></Link>
            <MenuBar />
            </div>
            <div class={style.dropdown}>
             <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Appliances</Box>
             <MenuBar />
             </div>
             <div class={style.dropdown}>
              <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Bath & Body</Box>
              <MenuBar />
              </div>
              <div class={style.dropdown}>
               <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Natural</Box>
               <MenuBar />
               </div>
               <div class={style.dropdown}>
                <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Baby</Box>
                <MenuBar />
                </div>
                <div class={style.dropdown}>
                 <Box style={Styles} w='100%' h="30px" bg='#ffffff' >Health</Box>
                 <MenuBar />
                 </div>
                 <div class={style.dropdown}>
                  <Box style={Styles} w='100%' h='30px' bg='#ffffff' >Fragrance</Box>
                  <MenuBar />
                  </div>
                  <div class={style.dropdown}>
                    <Box style={Styles}w='100%' h='30px' bg='#ffffff' >Pop Ups</Box>
                    <MenuBar />
                    </div>
                    
                    
        </HStack>
      </Box>
    )
}

export default SubNavbar;