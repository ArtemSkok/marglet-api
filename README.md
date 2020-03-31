# Marglet API

Is an API of the Marglet messenger.

## Steps to run locally with Docker CLI

1. Create the **marglet-network** network

```shell
docker network create --name=marglet-api --attachable --driver=bridge marglet-network
```

2. Run **mongo** container:

```shell
docker run --name=mongo --network=marglet-network -d -p 27017:27017 mongo
```

3. Build the **marglet-api** image:

```shell
docker build -t marglet-api .
```

4. Run the **marglet-api** container:

```shell
docker run --name=marglet-api --network=marglet-network -d -p 3030:3030 marglet-api
```

## Run locally with Docker-compose

```shell
docker-compose up
```
