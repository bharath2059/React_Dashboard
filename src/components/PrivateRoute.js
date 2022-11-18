import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


//to redirect page to login once the user clicks on logout
export default function PrivateRoute({ element: Element, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Outlet
            {...rest}
            render={props => {
                return currentUser ? <Outlet {...props} /> : <Navigate to="/login" />
            }}
        ></Outlet>
    )
}