import io from 'socket.io-client';
const sockets = io('http://localhost:5000', { autoConnect: true, forceNew: true });
// const sockets = io('/');
// console.log(sockets);
export default sockets;
