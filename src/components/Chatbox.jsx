import React, {useEffect, useRef, useState} from 'react';
import {ScrollArea, Title, AppShell, Burger, TextInput, ActionIcon, Group, Card} from "@mantine/core";
import styles from "./Chatbox.module.css";
import {getHotkeyHandler, useDisclosure} from "@mantine/hooks";
import ChatGroupCard from "./ChatGroupCard.jsx";
import ChatboxHeader from "./ChatboxHeader.jsx";
import ChatMessage from "./ChatMessage.jsx";
import {IconSend} from "@tabler/icons-react";
import axios from "axios";
import {useUser} from "@clerk/clerk-react";
import connectSocket from "../utils/socket.js";



const Chatbox = () => {
    const [events, setEvents] = useState([]);
    const [chatHeader, setChatHeader] = useState(null);
    const [currEventId, setCurrEventId] = useState(null);
    const [socket, setCurrSocket] = useState(null);

    const {user} = useUser();
    const userId = user.id;

    const [opened, {toggle}] = useDisclosure();
    const [inputVal, setInputVal] = useState("");

    const sendMsg = () => {
        console.log(inputVal)
        if (socket) {
            socket.emit("msg",socket.auth.userid)
        }
        setInputVal("");


    }
    //Renders current event header and relevant chat
    const onClickCard = (index) => {
        //use event ID to grab data and chat messages
        setChatHeader(events[index])
        setCurrEventId(events[index].eventid)
    }
    //Init first render of page
    useEffect(()=> {
        const socket = connectSocket(userId)
        setCurrSocket(socket)

        const baseUrl = import.meta.env.VITE_SERVER_URL
        const fetchEvents = async () => {
            const response = await axios.get(`${baseUrl}/api/chat`, {
                params: {
                    userId: user.id
                }
            });
            setEvents(response.data);
        }
        fetchEvents();

        return () => {
            socket.off("msg", () => {
                console.log("SOCKET OFF: ",socket.auth.userid)
            })
        }

    },[])

    //TODO: when new message appears scroll to bottom.
    const viewport = useRef < HTMLDivElement > (null);
    const scrollToBottom = () => {
        if (viewport.current) {
            viewport.current.scrollTo({
                top: viewport.current.scrollHeight / 2,
                behavior: 'smooth'
            });
        }
    }

    return (
        <AppShell
            header={{height: 50}}
            navbar={{width: {sm: 300, md: 400}, breakpoint: 'sm', collapsed: {mobile: !opened}}}
            padding="xs">
            <AppShell.Navbar p="md">
                <AppShell.Section>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />

                    <Title ta='center' mt='xs' order={3}> Event Chats </Title>
                </AppShell.Section>
                <AppShell.Section grow component={ScrollArea}>
                    {events.map((item,index) => (
                        <ChatGroupCard key={index} index={index} eventName = {item.title} onClick = {onClickCard}/>
                    ))}
                </AppShell.Section>
            </AppShell.Navbar>

            <AppShell.Main mt={-64}>
                {chatHeader !== null?
                    <ChatboxHeader opened={opened} toggle={toggle} {...chatHeader}/>:
                    <Card shadow="md" withBorder  bg='primary' grow mt='xs' mb='lg'>
                        <Title ta='center'> Select an event on left</Title>
                    </Card>

                }
                <ScrollArea className={styles.scroll}>
                    <ChatMessage position={'right'}/>
                    <ChatMessage position={'left'}/>
                    <ChatMessage position={'right'}/>
                    <ChatMessage position={'left'}/>
                    <ChatMessage position={'left'}/>
                    <ChatMessage position={'right'}/>
                    <ChatMessage position={'left'}/>
                    <ChatMessage position={'right'}/>

                </ScrollArea>
                <Group mt={10}>
                    <TextInput
                        style={{flexGrow: 1}}
                        placeholder="Input placeholder"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={
                            !/\S/.test(inputVal) ? undefined : inputVal.length < 1 ? undefined : getHotkeyHandler([["Enter", sendMsg]])
                        }
                    />
                    <ActionIcon
                        onClick={() => sendMsg()}
                        variant="hover"
                        size="md"
                        disabled={
                            !/\S/.test(inputVal) ? true : inputVal.length < 2 ? true : false
                        }
                    >
                        <IconSend/>
                    </ActionIcon>
                </Group>
            </AppShell.Main>
        </AppShell>

    );
};

export default Chatbox;