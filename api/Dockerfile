FROM node:8.6.0-alpine

# Create app directory
# WORKDIR api/usr/src/app
WORKDIR usr/src/app

# Install app dependencies
COPY package.json .

# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

# DB initialization
#ADD ./users.sql /docker-entrypoint-initdb.d/

EXPOSE 8080
CMD [ "npm", "start" ]
