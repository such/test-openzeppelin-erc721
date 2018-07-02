FROM mhart/alpine-node:8

#RUN apk add --no-cache make gcc g++ python git bash
RUN npm install -g ganache-cli