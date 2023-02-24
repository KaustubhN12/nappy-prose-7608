import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import AllRoutes from './Routes/AllRoutes'

import Home from './Pages/home';
import { useEffect } from 'react';
import { Auth } from './firebase';
//import Makeup_page from './Products/Makeup_page';
function App() {

  useEffect(()=>{
   Auth.onAuthStateChanged((user)=>{
    // console.log(user)
   })
  },[]);

  return (
    <div className="App">
      {/* <Home/> */}
     {/* <Footer/> */}
     <AllRoutes/>
    
    </div>
  );
}
export default App;
