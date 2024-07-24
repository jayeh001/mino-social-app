import React from 'react';
import {Avatar, Badge, Burger, Card, Group, Text, Title, Tooltip} from "@mantine/core";
import {IconCalendarEvent, IconMapPinFilled} from "@tabler/icons-react";
import styles from "./ChatBoxHeader.module.css";

const ChatboxHeader = ({opened, toggle}) => {
    return (
        <Card  shadow="md" withBorder  bg='primary' grow mt='xs' mb='lg' >
            <Group justify="space-between" align="center" mb="sm">
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Title order={5} className={styles.title} >Music event and beach side drinks</Title>
                <Badge size='xs' autoContrast color="red.8">1 hour ago</Badge>
            </Group>
            <Text size="xs" className={styles.text} mb="xs" autoContrast>
                YOOOO. Just flew in here from Antarctica. I'm a penguin.
                Let's get drinks and stare into the sun. I'm gonna be at the dopest
                coffee shop in town. Just wanna meet some other travelers while in town
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
            <Group justify="space-between" align="center">
                <Group justify="flex-start">
                    <IconMapPinFilled size={15}/>
                    <Text className={styles.text}> 1234 papa street </Text>
                </Group>
                <Group>
                    < IconCalendarEvent size={15}/>
                    <Text className={styles.text}>10/12/24 7:00 PM</Text>
                </Group>

            </Group>

        </Card>
    );
};

export default ChatboxHeader;