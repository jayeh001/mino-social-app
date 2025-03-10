import React, {useState} from 'react';
import {Button, Container, Modal, Textarea, TextInput} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";
import {useDisclosure} from "@mantine/hooks";
import {isNotEmpty, useField, useForm} from "@mantine/form";
import {IconMessageFilled} from "@tabler/icons-react";
import {useUser} from "@clerk/clerk-react";
import axios from "axios";

const PostModal = ({addEvent}) => {
    const [opened, { open, close }] = useDisclosure(false);

    const {user} = useUser();


    const postEvent = async (reqBody) => {
        const response = await axios.post('http://127.0.0.1:8000/api/events', reqBody);
        console.log('Response after post event:', response.data);
        return response.data;
    }

    const handleSubmit = () => {
        const { name, description, location, dateTime } = form.values;
        //TODO:
        form.reset();
        close();
        const reqBody = {
            owner: user.id,
            title: name,
            descr: description,
            postedDate: new Date(),
            location: location,
            dateTime: dateTime,
        }
        console.log("before SENDING: ", reqBody.postedDate)
         postEvent(reqBody).then(data => {
             console.log("ROW DATA: ",data)
             addEvent(data)
         });






    }
    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            location: '',
            dateTime: null,
        },
        validate: {
            name: (value) => (value.length < 4 ? 'Event name is too short' : null),
            description: (value) => (value.length < 10 ? 'Doesn\'t seem descriptive enough...' : null),
            location: (value) => (value.length < 5 ? 'Not a valid location' : null),
            dateTime: isNotEmpty('Enter a date')
        },
    })

    return (
        <div >
            <Modal opened={opened} onClose={close} title="Ready to Link? 🚀" zIndex={1001}>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        key = {form.key('name')}
                        {...form.getInputProps('name')}
                        label="Event Name"
                        name="name"
                        placeholder="Make it shiny 🤩"
                    />
                    <Textarea
                        key = {form.key('description')}
                        {...form.getInputProps('description')}
                        radius="md"
                        label="Event Description"
                        name="description"
                        placeholder="It's so quiet in here..."
                        autosize
                        minRows={4}
                    />
                    <TextInput
                        key = {form.key('location')}
                        {...form.getInputProps('location')}
                        label="Location"
                        name="location"
                        placeholder="where we dropping?"
                    />
                    <DateTimePicker
                        key = {form.key('dateTime')}
                        {...form.getInputProps('dateTime')}
                        label="Pick date and time"
                        name="dateTime"
                        placeholder="Pick date and time"
                        popoverProps={{zIndex: 1001}}
                    />
                    <Container style={{textAlign: 'center', marginTop: '20px'}}>
                        <Button
                            type="submit"
                            variant="filled" color="rgba(187, 0, 255, 1)"
                            leftSection={<IconMessageFilled size={12}/>}
                            size="xs"
                        >Send</Button>
                    </Container>
                    </form>
            </Modal>
            <Button onClick={open} mt="sm" variant="filled" color="#3EEAF0" autoContrast>Post an Event </Button>
        </div>
    );
};

export default PostModal;