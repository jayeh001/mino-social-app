import React from 'react';
import {Avatar, Badge, Card, Group, Text, Title, Tooltip} from "@mantine/core";
import styles from "./Posting.module.css"
import {IconCalendarEvent, IconMapPinFilled} from "@tabler/icons-react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
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
    function getTime(dateTimeString) {
        const adjustedDate = adjustDateTime(dateTimeString)
        const dateTime = new Date(adjustedDate);
        const now = new Date();
        const timeDifference = now.getTime() - dateTime.getTime();
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} days ago`;
        } else if (hours > 0) {
            return `${hours} hours ago`;
        } else if (minutes > 0) {
            return `${minutes} minutes ago`;
        } else {
            return `< 1 minute ago`;
        }
    }
    function formatDateTime(dateTimeString) {
        const adjustedDate = adjustDateTime(dateTimeString)
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const dateTime = new Date(adjustedDate);
        const month = months[dateTime.getMonth()];
        const day = dateTime.getDate();
        let hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        let period = 'A.M.';
        // Convert hours to 12-hour format and determine period (A.M. or P.M.)
        if (hours >= 12) {
            period = 'P.M.';
            if (hours > 12) {
                hours -= 12;
            }
        }
        if (hours === 0) {
            hours = 12; // Midnight is 12 A.M., noon is 12 P.M.
        }
        return `${month} ${day} ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
    }
    function adjustDateTime(dateTimeString) {
        let newDate = new Date(dateTimeString);
        newDate.setHours(newDate.getHours() - 7);
        while (newDate > date) {
            newDate.setDate(newDate.getDate() - 1); // Go to previous day
        }
        return newDate;
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