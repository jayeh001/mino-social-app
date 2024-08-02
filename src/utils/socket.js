import {io} from 'socket.io-client';


const connectSocket = (user) =>{
    const URL = "http://127.0.0.1:8000"
    const socket = io(URL, {
        auth: {
            userid: user
        }
    });
    socket.on('connect', () => {
        console.log('SOCKET CONNECTED. User ID IS : ',socket.auth.userid );
    });

    socket.on('disconnect', () => {
        console.log('SOCKED DISCONNECTED');
    });

    return socket
}
export default connectSocket;