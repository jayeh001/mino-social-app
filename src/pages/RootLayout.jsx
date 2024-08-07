import React, {useEffect} from 'react';
import Header from "../components/Header.jsx";
import {ClerkProvider, useUser} from "@clerk/clerk-react";
import {Link, Outlet, useNavigate} from 'react-router-dom'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    const navigate = useNavigate();


    return (
        <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, {replace: true})}
            publishableKey={PUBLISHABLE_KEY}
        >
            <Header/>
            <Outlet/>
        </ClerkProvider>
    );
};

export default RootLayout;