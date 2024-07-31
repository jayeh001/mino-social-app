import React from 'react';
import {SignUp} from '@clerk/clerk-react';
import {Container} from "@mantine/core";
const SignUpPage = () => {
    return (
        <Container
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
            <SignUp
                forceRedirectUrl='/home/user'
                signInUrl='/sign-in'
                path="/sign-up" />
        </Container>
    );
};

export default SignUpPage;