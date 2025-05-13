import { Navigate, Outlet } from "react-router-dom"

export const AuthenticatedRoute = ({isAuthenticated}) => {
    return isAuthenticated ? <Outlet/> : <Navigate to={"/login"} replace />;
}