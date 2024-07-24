import React from 'react';
import {Avatar, Container, Group, Text, Tooltip} from "@mantine/core";
import styles from './ChatMessage.module.css'
const ChatMessage = ({position}) => {
    const messagePos = position;

    return (
        <Group
            nowrap
            justify={messagePos === 'left' ? 'flex-start' : 'flex-end'}
            gap='xxs'
            >
            {messagePos === 'left' && <Tooltip label="Salazar Troop" withArrow>
                <Avatar src="image.png" radius="xl" />
            </Tooltip>}
            <Container bg={messagePos === 'left'? 'blue.3' : 'teal.3'} className={styles.container} ta='center'>
                <Text className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ducimus, esse. Amet cumque, delectus deserunt dicta dolorem earum explicabo facere ipsum iusto laborum magnam minus nam quae, recusandae similique veritatis!</Text>
            </Container>
            {messagePos === 'right' && <Tooltip label="Salazar Troop" withArrow>
                <Avatar src="image.png" radius="xl" />
            </Tooltip>}
        </Group>

    );
};

export default ChatMessage;