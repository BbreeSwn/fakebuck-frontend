import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  //* check user loggin?
  const [authUser, setAuthUser] = useState(null);

  const login = () => {};
  const logout = () => {};

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
