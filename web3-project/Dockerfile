FROM node:16.15.0-alpine3.14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build
EXPOSE 3000
CMD ["node","dist/main.js"]