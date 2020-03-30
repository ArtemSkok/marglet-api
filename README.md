# Marglet API

Is an API of the Marglet messenger.

## Steps to run locally in docker

1. Run **mongodb** container:

```shell
docker run -d -p 27017:27017 -v C:/mongodb/data mongo
```

2. Build an **marglet-api** image:

```shell
docker build -t marglet-api .
```

3. Run a container:

```shell
docker run -p 3030:3030 marglet-api
```
