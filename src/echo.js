import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'pusher',
    key: 'iilwfway5ger12vwqf5g',
    wsHost: 'localhost:8000', // Adjust this if your WebSocket server is on a different host
    wsPort: 8080, // Default port for Laravel WebSockets
    wssPort: 8080, // Default port for secure connections
    forceTLS: false, // Set to true if you're using HTTPS
    enabledTransports: ['ws', 'wss'], // Use both ws and wss
    cluster: 'mt1', // Add your Pusher cluster here
});

export default echo;
