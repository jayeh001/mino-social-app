import * as React from 'react'
import {useAuth} from "@clerk/clerk-react"
import {Outlet, useNavigate} from "react-router-dom"
import {useState} from "react";

export default function MainLayout() {
    const {userId, isLoaded} = useAuth()
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }
    }, [isLoaded, userId, navigate]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!userId) {
        return null;
    }

    return <Outlet />;

}