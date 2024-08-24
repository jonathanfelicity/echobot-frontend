<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { socket, connected, userCount } from './socket';




export default defineComponent({
  setup() {
    onMounted(() => {
      if (!socket.connected) {
        socket.connect();
      }
    });

    onBeforeUnmount(() => {
      socket.disconnect();
    });

    return {
      connected,
      userCount,
    };
  },
});
</script>

<template>
  <main class="h-screen flex flex-col">
    <!-- Header -->
    <header class="py-4">
      <nav class="flex justify-between items-center container mx-auto px-4">
        <a href="#" class="font-bold text-2xl">echobots</a>
        <a href="#" class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"
            class="text-gray-800 hover:text-gray-600 transition-colors">
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.867 8.166 6.84 9.492.5.092.682-.217.682-.482v-1.715c-2.773.604-3.355-1.339-3.355-1.339-.453-1.153-1.107-1.459-1.107-1.459-.907-.62.069-.608.069-.608 1.003.07 1.564 1.024 1.564 1.024.892 1.528 2.343 1.089 2.916.832.092-.646.349-1.089.636-1.339-2.22-.25-4.556-1.11-4.556-4.936 0-1.09.388-1.982 1.031-2.68-.103-.25-.447-1.257.098-2.617 0 0 .84-.268 2.75 1.024A9.58 9.58 0 0 1 12 8.768a9.58 9.58 0 0 1 2.659.36c1.909-1.292 2.751-1.024 2.751-1.024.548 1.359.202 2.367.099 2.617.642.698 1.028 1.59 1.028 2.68 0 3.833-2.34 4.681-4.568 4.927.36.31.68.92.68 1.85v2.734c0 .267.18.578.688.481C19.133 20.166 22 16.418 22 12c0-5.52-4.48-10-10-10z" />
          </svg> <span class="ml-2">View on GitHub</span>
        </a>
      </nav>
    </header>

    <!-- Main Section -->
    <section class="flex flex-1 justify-center items-center py-8">
      <div class="text-center">
        <p v-if="!connected" class="">Not connected</p>
        <p v-else class="">Connected to WebSocket server</p>

        <p v-if="userCount === null" class="text-2xl">Loading...</p>
        <p v-else class="text-9xl font-bold">{{ userCount }}</p>

        <p class="text-3xl font-semibold mt-4">Live User Count</p>
      </div>
    </section>
    <section class="text-center py-6">
      <p class="text-lg font-sans text-gray-800">
        Made with ❤️ by Jonathan Felicity
      </p>
    </section>

  </main>

</template>

<style scoped>
/* Add any styles here */
</style>
