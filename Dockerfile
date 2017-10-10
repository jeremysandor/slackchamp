FROM node:8.6.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]




#FROM python:3.4-alpine
#ADD . /code
#WORKDIR /code
#RUN pip install -r requirements.txt
#CMD ["python", "app.py"]