FROM node:16.14.2

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "build"]