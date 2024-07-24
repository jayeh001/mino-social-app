import React from 'react';
import { useState } from 'react';
import {Text, Image, Center, Group, Avatar} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE,  } from '@mantine/dropzone';
import {IconCloudUpload} from '@tabler/icons-react'
import styles from "./User.module.css";
const ImageDrop = () => {
    const [file, setFile] = useState(null);
    const preview = (file) => {
        console.log('the file: ', file)
        const imageUrl = URL.createObjectURL(file);
        return <Image src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    }

    return (

        <div color='red'>
            {preview}
            <Dropzone
                onDrop={setFile}
                accept={IMAGE_MIME_TYPE}
                mt='lg'
            >
                <Group justify='center' gap='md' mih={20}>
                    <IconCloudUpload size={20}/>
                    <Text> Upload Image </Text>
                </Group>
            </Dropzone>
        </div>



    );
};

export default ImageDrop;