import "./App.css";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Signup";
function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
