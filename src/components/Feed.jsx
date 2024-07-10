import React from 'react';
import {Card, Stack} from '@mantine/core'
import Posting from "./Posting.jsx";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
const Feed = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
            <Stack justify="flex-start" gap="sm"  align='center' mt="sm">
                <Modal opened={opened} onClose={close} title="Authentication" centered zIndex={1001}>
                    {/* Modal content */}
                </Modal>
                <Button onClick={open}>Post an Event</Button>

                <Posting/>
                <Posting/>
                <Posting/>
                <Posting/>
                <Posting/>
                <Posting/>
                <Posting/>

            </Stack>
    );
};

export default Feed;