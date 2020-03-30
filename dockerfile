FROM node:latest

WORKDIR /server

COPY . /server
RUN npm install

EXPOSE 3030
CMD [ "npm", "start" ]