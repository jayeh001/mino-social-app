import React from 'react';
import {Avatar, Button, Card, Group, Text, Tooltip} from "@mantine/core";
import styles from './ChatGroupCard.module.css'

const ChatGroupCard = ({index, eventName, onClick}) => {
    const handleClick = () => {
        onClick(index);
    }

    return (
        <Card
            withBorder
            shadow="md"
            className={styles.card}
            mt='xs'
            onClick={handleClick}
        >
            <Tooltip.Group>
                <Avatar.Group spacing="xs">
                    <Tooltip label="Salazar Troop" withArrow>
                        <Avatar color="gray.7" size='md' radius="xl"/>
                    </Tooltip>
                    <Tooltip label="Bandit Crimes" withArrow>
                        <Avatar color="gray.7" radius="xl"/>
                    </Tooltip>
                    <Tooltip label="Jane Rata" withArrow>
                        <Avatar color="gray.7" radius="xl"/>
                    </Tooltip>

                </Avatar.Group>
            </Tooltip.Group>
            <Text ta='center' lineClamp={2} className={styles.text}> {eventName}</Text>
        </Card>
    );
};

export default ChatGroupCard;