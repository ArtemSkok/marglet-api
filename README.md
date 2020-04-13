# Marglet API

Is an API of the Marglet messenger.

## Steps to run locally with Docker CLI

1. Create the **marglet-network** network:

    ```shell
    docker network create --attachable --driver=bridge marglet-network
    ```

2. Create mongoDB volume:

    ```shell
    docker volume create mongodbdata
    ```

3. Run **mongo** container:

    ```shell
    docker run --name=mongo --network=marglet-network -d -p 27017:27017 -v mongodbdata:/data/db mongo
    ```

4. Build the **marglet-api** image:

    ```shell
    docker build -t marglet-api .
    ```

5. Run the **marglet-api** container:

    ```shell
    docker run --name=marglet-api --network=marglet-network -d -p 3030:3030 marglet-api
    ```

## Run locally with Docker-compose

```shell
docker-compose rm
docker-compose pull
docker-compose build --no-cache
docker-compose up -d --force-recreate
```

## Clearing up unused docker containers /  networks / volumes / images and build-cache

```shell
docker system prune -a --volumes
```

## Publish GraphQL schema

1. Run API

    ```shell
    npm run start:dev
    ```

2. Publish

    ```shell
    npx apollo service:push --config=apollo.config.js --endpoint="http://localhost:3030" --key=[PASTE YOUR APOLLO ENGINE KEY HERE WITHOUT SQARE BRACES]
    ```
