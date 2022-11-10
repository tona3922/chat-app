import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase";

export const authContext = createContext();
export const authContextProvider = ({children}) =>{
    const [cuser, setstate] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user),
            console.log(user)
        })
    },[]);
    <authContextProvider.children value = {{cuser}}>
        {children}
    </authContextProvider.children>
}