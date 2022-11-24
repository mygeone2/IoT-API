FROM ubuntu
RUN apt-get -y update \
    && apt-get -y upgrade \
    && apt-get install -y sqlite3 libsqlite3-dev \
    && mkdir /db \
    && /usr/bin/sqlite3 /db/app.db
COPY ./script.sql /db/script.sql
WORKDIR /db
RUN echo 'sqlite3 iot_db'


#FROM node
#COPY ./app /app
#COPY ./package.json /app
#COPY --from=0 /db/iot_db /db/iot_db

