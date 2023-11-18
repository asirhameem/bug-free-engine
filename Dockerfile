FROM node:alpine

RUN mkdir -p /usr/src/node-backend && chown -R node:node /usr/src/node-backend

WORKDIR /usr/src/node-backend

COPY package.json .

USER node

RUN npm i --legacy-peer-deps

COPY --chown=node:node . .

EXPOSE 3000
