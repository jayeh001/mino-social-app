// Navbar.jsx
import React from 'react';
import {
    ActionIcon,
    Button,
    Container,
    Group,
    Title,
    useComputedColorScheme,
    useMantineColorScheme
} from '@mantine/core';
import { IconPhoto, IconCalendarEvent,IconMessageFilled, IconSun, IconMoonStars } from '@tabler/icons-react';
import styles from './Header.module.css'
import { useNavigate} from 'react-router-dom'


const Header = ( ) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();



    const navigate = useNavigate();
    return (
        <Container className={styles.container} bg='primary'>
            <Title    className={styles.mainTitle} visibleFrom = "xs" > mino</Title>
            <Title  className={styles.title} visibleFrom = 'xs'> San Francisco</Title>
            <Group justify="center" wrap="nowrap">
                <ActionIcon
                    onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
                    variant="filled"
                    color= {colorScheme === 'dark' ? 'yellow.5' : 'gray.7'}
                    autoContrast
                    mr="xs"
                >
                    {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoonStars size={20}/>}
                </ActionIcon>
                <Button
                    onClick={() => navigate('/')}
                    variant="filled" color='#F05365'
                    leftSection={<IconCalendarEvent size={12} />}
                    autoContrast
                    size="xs"
                    to="/chat"
                >events
                </Button>

                <Button
                    autoContrast
                    onClick={() => navigate('/chat')}
                    variant="filled" color="#FC9E4F"
                    leftSection={<IconMessageFilled size={12} />}
                    size="xs"
                >chats</Button>

                <Button
                    autoContrast
                    onClick={() => navigate('/user')}
                    variant="filled" color="#9FA0C3"
                    leftSection={<IconPhoto size={12} />}
                    size="xs"
                >User</Button>
            </Group>

        </Container>
    );
};

export default Header;