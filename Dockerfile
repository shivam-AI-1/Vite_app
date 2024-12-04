# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

# Install the serve package globally (to serve the build)
RUN npm install -g serve

# Build the React application
RUN npm run build

# Expose port 80 (for production)
EXPOSE 80

# Serve the build folder using serve
CMD ["serve", "-s", "build", "-l", "80"]
