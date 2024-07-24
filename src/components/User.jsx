import React, {useEffect, useState} from 'react';
import {Avatar, Title, Text, Group, Flex, Card, Button, TextInput, Textarea} from "@mantine/core";
import styles from "./User.module.css";
import {Dropzone, IMAGE_MIME_TYPE} from "@mantine/dropzone";
import {IconCloudUpload} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import image from "../assets/ocean_sunset.webp"

const User = () => {
    const[editMode, setEditMode] = React.useState(false);

    // Get pictures for avatar
    const [files, setFiles] = useState([])
    //Profile data
    const [state, setState] = useState({
        name: "Bob The Fish",
        bio: "I love burgers and making and eating them. eat burgers alot. i do it for fun. its great",
        interests: "eating, cooking, games, photography"
    });
    //previewing images in edit mode
    const previews = files.slice(0,1).map((file) => {
        const imageUrl = URL.createObjectURL(file);
        return <Avatar
            radius = "lg"
            bg='black'
            src={imageUrl? imageUrl : null}
            className={styles.avatar}
            mx='auto'
            mt={-60}
            onLoad={() => URL.revokeObjectURL(imageUrl)}
        />;
    });
    //Get form data
    const form = useForm({
        initialValues: {
            name: "",
            bio: "",
            interests: ""
        }
    })
    //
    useEffect(() => {
        // TODO:
        //fetch init data from backend to init forms and init look of profile
        const initValues = {name: state.name, bio: state.bio, interests: state.interests};
        form.initialize(initValues);

    })
    const handleSubmit = () => {
        const { name, bio, interests} = form.values;
        setState({name:name,bio:bio, interests:interests});
        setEditMode(editMode === false)
        //TODO:
        //update backend with new profile data
    }

    // 'url(https://images.unsplash.com/photo-1545132147-d037e6c54cfd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'

    return (
        <Flex  direction='column' align='center'>
            <Card  padding="xl" className={styles.card}  p mx='auto' radius='xl' bg='primary'>
                <Card.Section
                    h={170}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: 'left 53%',
                        backgroundSize: 'cover',
                    }}
                />
                {editMode === false ? (
                    <>
                        <Avatar
                        radius = "lg"
                        bg='black'
                        className={styles.avatar}
                        mx='auto'
                        mt={-60}/>
                        <Title ta="center" order={1} m='sm' mt="lg" className={styles.title}>{state.name}</Title>
                        <Title order={2} mt='lg' className={styles.title} ta='center'> Bio</Title>
                        <Text c="dimmed" className={styles.text}>{state.bio}</Text>
                        <Title order={2} mt='lg' className={styles.title} ta='center'> Interests </Title >
                        <Text c='dimmed' ta='center' className={styles.text}> {state.interests}</Text>
                    </>
                ) : (
                    <>
                        {previews}
                        <Dropzone
                            onDrop={setFiles}
                            accept={IMAGE_MIME_TYPE}
                            mt='lg'>
                            <Group justify='center' gap='md' mih={20}>
                                <IconCloudUpload size={20}/>
                                <Text> Update Picture </Text>
                            </Group>
                        </Dropzone>
                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <TextInput
                                label="Name"
                                placeholder="Namez"
                                key={form.key('name')}
                                {...form.getInputProps('name')}
                            />
                            <Textarea
                                label="Bio"
                                minRows={6}
                                autosize
                                placeholder="enter bio"
                                key={form.key('bio')}
                                {...form.getInputProps('bio')}
                            />
                            <Textarea
                                label="Interests"
                                autosize
                                minRows={4}
                                placeholder="enter interests"
                                key={form.key('interests')}
                                {...form.getInputProps('interests')}
                            />
                            <Button
                                mt='lg'
                                autoContrast variant='filled'
                                color='#F05365'
                                type='submit'>
                                Save Changes
                            </Button>
                        </form>
                    </>

                )}
            </Card>
            {editMode === false ? (
                <Button autoContrast variant='filled'
                        color='#F05365'
                        onClick={() => {
                            setEditMode( editMode === false)
                        }} >
                    Edit Profile
                </Button>
            ) : null}
        </Flex>

    );
};

export default User;