// Navbar.jsx
import React from 'react';
import {Button, Container, Group, Title} from '@mantine/core';
import { IconPhoto, IconCalendarEvent,IconMessageFilled } from '@tabler/icons-react';
import styles from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = ( {onButtonClick} ) => {
    return (
        <Container className={styles.container} >
            <Title    className={styles.mainTitle} visibleFrom = "xs"> mino</Title>
            <Title  className={styles.title}> San Francisco</Title>
            <Group justify="center" wrap="nowrap">
                <Button
                    onClick={() =>onButtonClick('events')}
                    variant="gradient" gradient={{ from: 'rgba(187, 0, 255, 1)', to: 'rgba(10, 124, 255, 1)', deg: 90 }}
                    leftSection={<IconCalendarEvent size={12} />}
                    size="xs"
                >events
                </Button>

                <Button
                    onClick={() =>onButtonClick('chats')}
                    variant="filled" color="rgba(187, 0, 255, 1)"
                    leftSection={<IconMessageFilled size={12} />}
                    size="xs"
                >chats</Button>

                <Button
                    onClick={() =>onButtonClick('user')}
                    variant="filled" color="rgba(10, 124, 255, 1)"
                    leftSection={<IconPhoto size={12} />}
                    size="xs"
                >User</Button>
            </Group>

        </Container>
    );
};

export default Header;