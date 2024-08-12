import { Navigate } from "react-router"
import { useAppSelector } from "../redux/store"

export const AuthProtectedLayout = ({ children }) => {
  const { data } = useAppSelector((state) => state.auth)
  if (!data?.id) {
    return <Navigate to={"/login"} />
  }
  return <div className="home-layout h-full">{children}</div>
}
