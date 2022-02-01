FROM node:16 as base

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .



FROM base as production

ENV NODE_PATH=./dist
RUN yarn build
