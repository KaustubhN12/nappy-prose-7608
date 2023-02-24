import { createContext,useState,useEffect} from "react"

export const AuthContext = createContext();


const AuthContextProvider = ({children})=>{
 
 const [isAuth , setisAuth] = useState(false);
 const [Myname , setMyname] = useState("");

const ChangeMyname = (name)=>{
  setMyname(name)
}

 const changeAuth =()=>{
  setisAuth(true)
 }

    return (
        <AuthContext.Provider value={{changeAuth,isAuth,ChangeMyname,Myname}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;