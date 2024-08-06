import React, {useEffect, useState} from 'react';
import {Stack} from '@mantine/core'
import Posting from "./Posting.jsx";
import '@mantine/dates/styles.css';
import PostModal from "./PostModal.jsx";
import axios from "axios";

const Feed = () => {
    const [events, setEvents] = useState([]);
    const addEvent = (newItem) => {
        setEvents([newItem,...events]); // Add new item to the list
    };
    const baseUrl = import.meta.env.VITE_SERVER_URL
    useEffect(()=> {
        const fetchEvents = async () => {
            const response = await axios.get(`${baseUrl}/api/events`);
            setEvents(response.data);
        }
        fetchEvents();
    },[])

    return (
            <Stack justify="flex-start" gap="sm"  align='center'  >
                <PostModal addEvent={addEvent} mt="lg"/>
                {events.map((item,index) => (
                    <Posting key={index} {...item}/>
                ))}
            </Stack>
    );
};

export default Feed;