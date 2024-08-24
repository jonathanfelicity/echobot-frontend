import { ref } from 'vue';
import { io, Socket } from 'socket.io-client';


export const connected = ref(false);
export const userCount = ref<number | null>(null); // Ref for user count


const URL = 'http://localhost:8081';
export const socket: Socket = io(URL);

// Connection events
socket.on('connect', () => {
  connected.value = true;
});

socket.on('disconnect', () => {
  connected.value = false;
});

// Listen for user count updates
socket.on('count-update', (newCount: number) => {
  console.log(`User count updated: ${newCount}`);
  userCount.value = newCount;
});