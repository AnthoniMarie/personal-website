FROM node:16.2-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npx", 'prisma migrate dev --name "init"']
CMD ["npm", "start"]
