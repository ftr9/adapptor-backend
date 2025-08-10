# specify base node image
FROM node:alpine

# setup working directory
WORKDIR /app

# Copy package file for installation
COPY package.json .
COPY package-lock.json .

RUN npm install

# Copy all the source codes in to the container
COPY . .

# build the typescript project 
RUN npm run build

EXPOSE 3000

# start the server
CMD [ "npm","start" ]