import React from 'react';
import {Avatar, Badge, Card, Group, Text, Title, Tooltip} from "@mantine/core";
import styles from "./Posting.module.css"
import {IconCalendarEvent, IconMapPinFilled} from "@tabler/icons-react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {formatDateTime, getTime} from "../utils/DateTime.js";
//TODO:
//on click,
const Posting = ({title, descr, address, date, name, posteddate, id, userid }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/home/chat')
        const requestBody = {
            userId: userid,
            eventId:eventid
        }
        const attendEvent = async(requestBody) => {
            const response = await axios.put('http://127.0.0.1:8000/api/chat', requestBody);
        }
        attendEvent(requestBody);
    }


    return (
        <Card  className= {styles.card} shadow="md" withBorder radius="lg" bg='primary' onClick={handleClick}>
            <Group justify="space-between" align="center" mb="sm">
                <Tooltip label={name} withArrow>
                    <Avatar variant="light" radius="xl" size="md" color='gray.7' />
                </Tooltip>
                <Title order={4} >{title}</Title>
                <Badge autoContrast color="red.8">{getTime(posteddate)}</Badge>
            </Group>
            <Text size="sm"  mb="xs" autoContrast>
                {descr}
            </Text>
            <Group justify="space-between" align="center">
                <Group justify="flex-start">
                    <IconMapPinFilled size={15}/>
                    <text> {address} </text>
                </Group>
                <Group>
                    < IconCalendarEvent size={15}/>
                    <text>{formatDateTime(date)}</text>
                </Group>
            </Group>
        </Card>
    );
};

export default Posting;