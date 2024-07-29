import React from 'react';
import {Avatar, Button, Card, Group, Text, Tooltip} from "@mantine/core";
import styles from './ChatGroupCard.module.css'

const ChatGroupCard = () => {
    const onClickCard = () => {
        //use event ID to grab data and chat messages
        console.log('hi')
    }
    return (
        <Card

            bg='grape.1'
            className={styles.card}
            mt='xs'
            onClick={onClickCard}
        >
            <Tooltip.Group>
                <Avatar.Group spacing="xs">
                    <Tooltip label="Salazar Troop" withArrow>
                        <Avatar size='md' radius="xl"/>
                    </Tooltip>
                    <Tooltip label="Bandit Crimes" withArrow>
                        <Avatar radius="xl"/>
                    </Tooltip>
                    <Tooltip label="Jane Rata" withArrow>
                        <Avatar radius="xl"/>
                    </Tooltip>

                </Avatar.Group>
            </Tooltip.Group>
            <Text lineClamp={2} className={styles.text}> Music event and beach side drinks</Text>
        </Card>
    );
};

export default ChatGroupCard;