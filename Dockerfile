# Step 1: Build the Vue.js application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install dependencies using pnpm
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the source code
COPY . .

# Build the Vue.js app
RUN pnpm run build

# Step 2: Serve the application with a lightweight server
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the server
EXPOSE 80

# Default command to run nginx
CMD ["nginx", "-g", "daemon off;"]
