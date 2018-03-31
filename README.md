# slackchamp
slackchamp is a boilerplate setup to run a PostgreSQL, Node.js, React and NGINX stack in a docker swarm. 

## Getting started
`cd ui`
`npm install`

`cd ..`
`cd api`
`npm install`

`cd ..`
`docker-compose up`

Note: `docker-compose up` should remove the need to manually run npm. Currently the volumes are not being mounted to allow for that, so the manual `npm install`s are needed.

You should now be able to access the app at localhost:80
