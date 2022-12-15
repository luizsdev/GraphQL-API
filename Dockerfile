FROM node:19.2.0

WORKDIR = /usr/app

COPY package*.json ./

RUN yarn 

COPY . .

RUN yarn run generate

EXPOSE 4000

CMD yarn start