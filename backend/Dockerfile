FROM node:18.17-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 3001

# CMD npm start
CMD [ "npm", "run", "start:dev" ]
