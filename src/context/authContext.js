import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const authContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [cuser, setstate] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setstate(user);
      console.log(user);
    });
  }, []);
  <AuthContextProvider.children value={{ cuser }}>
    {children}
  </AuthContextProvider.children>;
};
