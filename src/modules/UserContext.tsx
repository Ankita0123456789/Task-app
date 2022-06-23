import React from "react";
import { createContext, useState } from "react";
import Cookies from 'universal-cookie';

const AuthContext = createContext({})

type Props = { children: boolean }


export function Appcontext({children}: Props) {
  const [auth, setauth] = useState(false);
  function toggle() {
    setauth(!auth);
  }
  function Login(){
    const cookies = new Cookies();
    cookies.set('email', 'ankitaradhathakur', { path: '/' });
    cookies.set('password', 'Ankita12#', { path: '/' });
    console.log(cookies.get('email')); 
  }
  return (
    <AuthContext.Provider value={{ auth, toggle}}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;