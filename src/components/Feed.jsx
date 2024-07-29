import React from 'react';
import {Card, Stack, Textarea, TextInput, Title} from '@mantine/core'
import Posting from "./Posting.jsx";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import '@mantine/dates/styles.css';
import {DateTimePicker} from "@mantine/dates";
import PostModal from "./PostModal.jsx";

const Feed = () => {


    return (

            <Stack justify="flex-start" gap="sm"  align='center'  >
                <PostModal mt="lg"/>
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