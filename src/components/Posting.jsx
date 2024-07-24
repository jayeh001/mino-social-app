import React from 'react';
import {Avatar, Badge, Card, Group, Text, Title} from "@mantine/core";
import styles from "./Posting.module.css"
import {IconMapPinFilled, IconCalendarEvent} from "@tabler/icons-react"
const Posting = () => {
    return (
        <Card  className= {styles.card} shadow="md" withBorder radius="lg" bg='primary'>
            <Group justify="space-between" align="center" mb="sm">
                <Avatar variant="light" radius="xl" size="md" src="" />
                <Title order={4} >Music event and beach side drinks</Title>
                <Badge autoContrast color="red.8">1 hour ago</Badge>
            </Group>
            <Text size="sm"  mb="xs" autoContrast>
                YOOOO. Just flew in here from Antarctica. I'm a penguin.
                Let's get drinks and stare into the sun. I'm gonna be at the dopest
                coffee shop in town. Just wanna meet some other travelers while in town
            </Text>
            <Group justify="space-between" align="center">
                <Group justify="flex-start">
                    <IconMapPinFilled size={15}/>
                    <text> 1234 papa street </text>
                </Group>
                <Group>
                    < IconCalendarEvent size={15}/>
                    <text>10/12/24 7:00 PM</text>
                </Group>

            </Group>

        </Card>
    );
};

export default Posting;