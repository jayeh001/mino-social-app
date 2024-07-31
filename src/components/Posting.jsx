import React from 'react';
import {Avatar, Badge, Card, Group, Text, Title, Tooltip} from "@mantine/core";
import styles from "./Posting.module.css"
import {IconMapPinFilled, IconCalendarEvent} from "@tabler/icons-react"
//TODO:
//on click,
const Posting = ({title, descr, address, date }) => {
    return (
        <Card  className= {styles.card} shadow="md" withBorder radius="lg" bg='primary'>
            <Group justify="space-between" align="center" mb="sm">
                <Tooltip label='hi' withArrow>
                    <Avatar variant="light" radius="xl" size="md" src="" />
                </Tooltip>
                <Title order={4} >{title}</Title>
                <Badge autoContrast color="red.8">1 hour ago</Badge>
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
                    <text>{date}</text>
                </Group>

            </Group>

        </Card>
    );
};

export default Posting;