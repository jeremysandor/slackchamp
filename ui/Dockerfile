FROM node:8.6.0-alpine

# Create app directory
WORKDIR ui/usr/src/ui

# Install app dependencies
COPY package.json .

# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install

# Bundle UI source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
