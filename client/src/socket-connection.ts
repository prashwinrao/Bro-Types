import { io } from 'socket.io-client';

const socket = io( process.env.REACT_APP_SERVER_URL || 'https://bro-types.vercel.app/'
);

export default socket;
