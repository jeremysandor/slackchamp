FROM node:8.6.0-alpine

# Create app directory
#WORKDIR ui/usr/src/ui
#WORKDIR usr/src/ui
#WORKDIR usr/src
WORKDIR ui

# Install app dependencies
#COPY package.json .
COPY package.json /ui

# For npm@5 or later, copy package-lock.json as well
#COPY package.json package-lock.json ./
COPY package.json package-lock.json /ui/

RUN npm install

# needed this for dev
#RUN npm run build:dll

# Bundle UI source
#COPY . .
#COPY . /ui
COPY . /ui

EXPOSE 3000
CMD [ "npm", "start" ]
