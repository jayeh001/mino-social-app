import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import './App.css'
import {Button, createTheme, MantineProvider, virtualColor} from "@mantine/core";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventsPage from "./pages/EventsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import {ClerkProvider} from '@clerk/clerk-react'
import LandingPage from "./pages/LandingPage.jsx";
import RootLayout from "./RootLayout.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import MainLayout from "./MainLayout.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
//
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// if (!PUBLISHABLE_KEY) {
//     throw new Error("Missing Publishable Key")
// }

const theme = createTheme({
    fontFamily: 'roboto, helvetica, sans-serif',
    primaryShade: {light: 0, dark: 6},
    colors: {
        primary: virtualColor({
            name: 'primary',
            dark: 'dark',
            light: 'gray',
        }),
    }
})

const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {path:'/', element: <LandingPage/>},
            {path:'/sign-up', element: <SignUpPage/>},
            {path: '/sign-in', element: <SignInPage/>},
            {
                element: <MainLayout/>,
                path: "home",
                children: [
                    {path: '/home', element: <EventsPage/>},
                    {path: '/home/chat', element: <ChatPage/>},
                    {path: '/home/user', element: <UserPage/>},
                ]
            }
        ]
    }
])
// const router = createBrowserRouter([
//     {path: '/', element: <EventsPage/>},
//     {path: '/chat', element: <ChatPage/>},
//     {path: '/user', element: <UserPage/>},
//     {path: '/land', element: <LandingPage/>}
// ]);


function App() {
    console.log(theme)
    return (
        <MantineProvider theme={theme} defaultColorScheme="auto">
            <div>
                <RouterProvider router={router}/>
            </div>
        </MantineProvider>
    )
}

export default App
