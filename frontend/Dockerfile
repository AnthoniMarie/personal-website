FROM node:alpine

RUN mkdir -p /usr/src/app

ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app

COPY yarn.lock /usr/src/app

ENV NODE_ENV=production

RUN yarn add --dev typescript @types/node

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]