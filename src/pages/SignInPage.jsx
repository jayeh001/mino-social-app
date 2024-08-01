import { SignIn } from "@clerk/clerk-react"
import {Container} from "@mantine/core";
const CLERK_SIGN_UP_URL = import.meta.env.VITE_CLERK_SIGN_UP_URL;
if (!CLERK_SIGN_UP_URL) {
    throw new Error("CLERK_SIGN_UP_URL is required");
}
export default function SignInPage() {
    return (
        <Container
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
            <SignIn
                forceRedirectUrl='/home'
                path="/sign-in"
                signUpUrl = {CLERK_SIGN_UP_URL}
            />
        </Container>
    );
}