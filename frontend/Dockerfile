FROM node:16.2-alpine as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["ls", "-l"]

FROM nginx:stable-alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]