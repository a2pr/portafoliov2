FROM node:10-alpine

COPY package.json .

RUN npm install

RUN ls -la

COPY . .

CMD ["npm", "run", "serve"]