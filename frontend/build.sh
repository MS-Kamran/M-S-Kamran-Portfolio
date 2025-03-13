#!/bin/bash

# Build the frontend
npm run build

# Create the static directory in backend if it doesn't exist
mkdir -p ../backend/static

# Copy the build files to the backend's static directory
cp -r build/* ../backend/static/

echo "Frontend built and copied to backend/static" 