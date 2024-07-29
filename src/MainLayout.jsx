import * as React from 'react'
import {useAuth} from "@clerk/clerk-react"
import {Outlet, useNavigate} from "react-router-dom"
import {useState} from "react";

export default function MainLayout() {
    const {userId, isLoaded} = useAuth()
    const navigate = useNavigate()
    const [shouldRender, setShouldRender] = useState(false);

    console.log('test', userId)

    React.useEffect(() => {
        if (!userId) {
            navigate("/sign-in")
        } else {
            setShouldRender(true);
        }
    }, [isLoaded, navigate, userId])

    if (!isLoaded) return "Loading...!"

    if (!shouldRender) {
        return null;
    } else {
        return (
            <Outlet/>
        )
    }
}