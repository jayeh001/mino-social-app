import React from 'react';
import {Avatar, Badge, Burger, Card, Group, Text, Title, Tooltip} from "@mantine/core";
import {IconCalendarEvent, IconMapPinFilled} from "@tabler/icons-react";
import styles from "./ChatBoxHeader.module.css";
import {getTime, formatDateTime} from "../utils/DateTime"
const ChatboxHeader = ({opened, toggle, ...chatHeader}) => {
    return (
        <Card  shadow="md" withBorder  bg='primary' grow mt='xs' mb='lg' >
            <Group justify="space-between" align="center" mb="sm">
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Title order={5} className={styles.title} >{chatHeader.title}</Title>
                <Badge size='xs' autoContrast color="red.8">{getTime(chatHeader.posteddate)}</Badge>
            </Group>
            <Text size="xs" className={styles.text} mb="xs" autoContrast>
                {chatHeader.descr}
            </Text>
            <Tooltip.Group>
                <Avatar.Group spacing="xxs">
                    <Tooltip label="Salazar Troop" withArrow>
                        <Avatar size='sm'  radius="xl" />
                    </Tooltip>
                    <Tooltip label="Bandit Crimes" withArrow>
                        <Avatar size='sm' radius="xl" />
                    </Tooltip>
                    <Tooltip label="Jane Rata" withArrow>
                        <Avatar size='sm' radius="xl" />
                    </Tooltip>
                </Avatar.Group>
            </Tooltip.Group>
            <Group justify="space-between" align="center" mt="xs">
                <Group justify="flex-start">
                    <IconMapPinFilled size={15}/>
                    <Text className={styles.text}> {chatHeader.address} </Text>
                </Group>
                <Group>
                    < IconCalendarEvent size={15}/>
                    <Text className={styles.text}>{formatDateTime(chatHeader.date)}</Text>
                </Group>
            </Group>
        </Card>
    );
};

export default ChatboxHeader;