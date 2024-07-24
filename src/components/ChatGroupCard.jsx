import React from 'react';
import {Avatar, Card, Group, Text, Tooltip} from "@mantine/core";
import styles from './ChatGroupCard.module.css'

const ChatGroupCard = () => {
    return (
        <Card
            bg='grape.1'
            className={styles.card}
            mt='xs'
            component='Tabs.Tab'
        >
            <Tooltip.Group>
                <Avatar.Group spacing="xs">
                    <Tooltip label="Salazar Troop" withArrow>
                        <Avatar size='md'  radius="xl" />
                    </Tooltip>
                    <Tooltip label="Bandit Crimes" withArrow>
                        <Avatar  radius="xl" />
                    </Tooltip>
                    <Tooltip label="Jane Rata" withArrow>
                        <Avatar radius="xl" />
                    </Tooltip>

                </Avatar.Group>
            </Tooltip.Group>
            <Text lineClamp={2} className={styles.text}> Yooo who wants drinks tonight its gonna be
                soooooooo gooooood and we gonnnna love it man and theres gonna fuinnnn stuff</Text>
        </Card>
    );
};

export default ChatGroupCard;