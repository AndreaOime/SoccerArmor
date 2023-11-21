import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {
  const { login, handlerLogout, handlerLogin } = useAuth();

  return (
    <AuthContext.Provider value={
      {
        login,
        handlerLogout,
        handlerLogin
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

