FROM node:latest

WORKDIR /marglet-api

COPY . /marglet-api
RUN npm install

EXPOSE 3030
CMD [ "npm", "start" ]