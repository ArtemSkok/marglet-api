# stage 1 - build
FROM node AS builder
WORKDIR /marglet-api
COPY package.json tsconfig.json tslint.json ./
RUN npm install
COPY src/ src/
RUN npm run build

# stage 2 - dist clone and run
FROM node
WORKDIR /marglet-api
COPY package*.json .
RUN npm install --production

COPY --from=builder /marglet-api/dist dist

COPY .env .

EXPOSE 3030
CMD ["npm", "run", "start:prod"]