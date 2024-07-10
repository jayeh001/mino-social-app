// Navbar.jsx
import React from 'react';
import {Button, Container, Group, Title} from '@mantine/core';
import { IconPhoto, IconCalendarEvent,IconMessageFilled } from '@tabler/icons-react';
import styles from './Header.module.css'
import { useNavigate} from 'react-router-dom'


const Header = ( ) => {
    const navigate = useNavigate();
    return (
        <Container className={styles.container} >
            <Title    className={styles.mainTitle} visibleFrom = "xs"> mino</Title>
            <Title  className={styles.title}> San Francisco</Title>
            <Group justify="center" wrap="nowrap">
                <Button
                    onClick={() => navigate('/')}
                    variant="gradient" gradient={{ from: 'rgba(187, 0, 255, 1)', to: 'rgba(10, 124, 255, 1)', deg: 90 }}
                    leftSection={<IconCalendarEvent size={12} />}
                    size="xs"
                    to="/chat"
                >events
                </Button>

                <Button
                    onClick={() => navigate('/chat')}
                    variant="filled" color="rgba(187, 0, 255, 1)"
                    leftSection={<IconMessageFilled size={12} />}
                    size="xs"
                >chats</Button>

                <Button

                    variant="filled" color="rgba(10, 124, 255, 1)"
                    leftSection={<IconPhoto size={12} />}
                    size="xs"
                >User</Button>
            </Group>

        </Container>
    );
};

export default Header;