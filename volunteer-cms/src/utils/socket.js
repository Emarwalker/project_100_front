import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL || 'http://localhost:5001 || https://project-100-front.onrender.com');

export default socket;
