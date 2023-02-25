import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Pages/home';
import { useEffect } from 'react';
import { Auth } from './firebase';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import SubNavbar from './Components/Navbar/SubNavbar';
import { useDispatch } from 'react-redux';
import { getlogin } from './Redux/Authentication/Action';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
   Auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(getlogin(user.displayName));
    }
    // console.log(user.displayName);
   })
  },[]);

  return (
    <div className="App">
      <Navbar/>
      <SubNavbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}
export default App;
