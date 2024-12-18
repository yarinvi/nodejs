# Use the official Node.js 20.8.1 image as the base image
FROM node:20.8.1

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
# This allows Docker to cache the npm install step if dependencies haven't changed
COPY package*.json ./

# Install dependencies listed in package.json
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 to allow external access to the container
EXPOSE 3000

# Start the Node.js application using the start script from package.json
CMD ["npm", "start"]


# Build the container
# docker build -t <container_name> .
# Run the container
# docker run --env-file .env -p 3000:3000 <container_name>

# Stop the container and delete it
# docker ps
# docker stop <container_id>
# docker rm <container_id>
