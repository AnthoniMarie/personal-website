FROM node:16.2-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV="production npm run build"

EXPOSE 1337

CMD ["npm", "start"]
