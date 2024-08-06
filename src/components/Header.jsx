// Navbar.jsx
import React from 'react';
import {
    ActionIcon,
    Button,
    Container,
    Group,
    Title,
    useMantineColorScheme,
    Menu,
} from '@mantine/core';
import {
    IconPhoto,
    IconCalendarEvent,
    IconMessageFilled,
    IconSun,
    IconMoonStars,
    IconUserFilled,
    IconUserCircle,
    IconLogout
} from '@tabler/icons-react';
import styles from './Header.module.css'
import { useNavigate, Link} from 'react-router-dom'
import {SignedIn, SignedOut, SignOutButton, useUser} from "@clerk/clerk-react";


const Header = ( ) => {
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const navigate = useNavigate();
    const {isSignedIn} = useUser()
    return (
        <Container className={styles.container} bg='primary'>
            <Title
                component={Link}
                to={isSignedIn ? '/home' : '/'}
                className={styles.mainTitle}
                visibleFrom = "xs" > mino</Title>
            <SignedIn>
                <Title  className={styles.title} visibleFrom = 'xs'> San Francisco</Title>
            </SignedIn>
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
                <SignedIn>
                    <Button
                        onClick={() => navigate('/home')}
                        variant="filled" color='#F05365'
                        leftSection={<IconCalendarEvent size={12} />}
                        autoContrast
                        size="xs"
                    >events
                    </Button>

                    <Button
                        autoContrast
                        onClick={() => navigate('/home/chat')}
                        variant="filled" color="#FC9E4F"
                        leftSection={<IconMessageFilled size={12} />}
                        size="xs"
                    >chats</Button>

                    <Menu size='xs' color='grape.6' trigger='hover' leftSection={<IconUserFilled size={12} />}>
                        <Menu.Target>
                            <Button>User</Button>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={<IconUserCircle size={15} />}
                                onClick={() => navigate('/home/user')}>
                                Profile
                            </Menu.Item>
                            <SignOutButton>
                                <Menu.Item leftSection={<IconLogout size={15} />}> Sign out</Menu.Item>
                            </SignOutButton>


                        </Menu.Dropdown>
                    </Menu>
                </SignedIn>
                <SignedOut>
                    <Button
                        autoContrast
                        onClick={() => navigate('/sign-in')}
                        variant="filled" color="#f39490"
                        leftSection={<IconPhoto size={12} />}
                        size="xs"
                    >Sign In</Button>
                </SignedOut>
            </Group>
        </Container>
    );
};

export default Header;