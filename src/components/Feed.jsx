import React, {useEffect, useState} from 'react';
import {Card, Stack, Textarea, TextInput, Title} from '@mantine/core'
import Posting from "./Posting.jsx";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import '@mantine/dates/styles.css';
import {DateTimePicker} from "@mantine/dates";
import PostModal from "./PostModal.jsx";
import axios from "axios";

const Feed = () => {
    const [events, setEvents] = useState([]);

    const addEvent = (newItem) => {
        setEvents([newItem,...events]); // Add new item to the list
    };

    //TODO: FIX URL
    useEffect(()=> {
        const fetchEvents = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/events');
            console.log('Response:', response.data);
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