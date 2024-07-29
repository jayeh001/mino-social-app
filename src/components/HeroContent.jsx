import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import { useNavigate} from 'react-router-dom'
import styles from './HeroContent.module.css';
import React from 'react';

export function HeroContent() {
    const navigate = useNavigate();
    return (
        <div className={styles.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .50) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={styles.container} size="md">
                <Title className={styles.title}>Connect with travelers and nomads around you</Title>
                <Text className={styles.description} size="xl" mt="xl">
                    Post or join hangouts and events in your city. Join real time chats with the people attending.
                    Connect and make new friends.
                </Text>

                <Button
                    onClick = {() => navigate('/sign-up')}
                    autoContrast
                    variant="filled"
                    color='cyan'
                    size="xl"
                    radius="xl"
                    className={styles.control}>
                    Get started
                </Button>
            </Container>
        </div>
    );
}