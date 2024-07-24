import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import 'react-chat-elements/dist/main.css'
import './App.css'
import {Button, createTheme, MantineProvider, virtualColor} from "@mantine/core";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventsPage from "./pages/EventsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import UserPage from "./pages/UserPage.jsx";

const theme = createTheme({
    // primaryColor: 'yellow',

    // autoContrast: true,
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
    {path: '/', element: <EventsPage/>},
    {path: '/chat', element: <ChatPage/>},
    {path: '/user', element: <UserPage/>}
]);


function App() {
    console.log(theme)
  return (
      <MantineProvider theme = {theme} defaultColorScheme="auto">
          <div >
              <RouterProvider router={router}/>
          </div>
      </MantineProvider>

  )
}
export default App
