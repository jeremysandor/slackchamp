FROM postgres:9.6.5-alpine

# this allows for init.sql to build an intial table
ADD ./init.sql /docker-entrypoint-initdb.d/init.sql