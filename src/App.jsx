import '@mantine/core/styles.css';
import './App.css'
import {Button, createTheme, MantineProvider, virtualColor} from "@mantine/core";
import Header from "./components/Header.jsx";
import Feed from "./components/Feed.jsx";
import {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventsPage from "./pages/EventsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";

const theme = createTheme({
    primaryColor: "grape",
    autoContrast: true,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    colors: {
        primary: virtualColor({
            name: 'primary',
            dark: 'red',
            light: 'grape',
        }),
    },

})

const router = createBrowserRouter([
    {path: '/', element: <EventsPage/>},
    {path: '/chat', element: <ChatPage/>}
]);


function App() {
    // const [content,setContent] = useState("events");
    // const handleContentSelect = (contentName) => {
    //     setContent(contentName);
    // }
  return (
      <MantineProvider theme = {theme} defaultColorScheme="light">
          <div >
              {/*<Header onButtonClick = {handleContentSelect}/>*/}
              {/*{ content === "events" && <Feed/> }*/}
              <RouterProvider router={router}/>
          </div>
      </MantineProvider>

  )
}
export default App
