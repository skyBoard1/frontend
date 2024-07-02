import { io } from "socket.io-client"

const dev = `http://skyboardgames.com`;
const prod = "http://skyboardgames.com";

const URL = process.env.NODE_ENV === "development" ? dev : prod;

const socket = io(URL + '/scrabble', {
    autoConnect: false,
    path: '/games/socket.io'
});

export default socket;