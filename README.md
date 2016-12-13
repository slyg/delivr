# Delivr :truck: [![CircleCI](https://circleci.com/gh/slyg/delivr.svg?style=svg)](https://circleci.com/gh/slyg/delivr)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), then ejected, hence the loads of dependencies :neckbeard:.

## Build and run the solution

### With docker lazily (fastest solution)

CI produces a docker image you can pull and run.

```sh
$ docker run -p 9000:80 slyg/delivr
# -> Serves content at http://localhost:9000/ or http://<docker_host>:9000/
```

### With docker locally

```sh
# Build
$ docker-compose -f docker-compose.build.yml up
# -> Built files in /build folder

# Serve
$ docker-compose up
# -> Serves content at http://localhost:9000/ or http://<docker_host>:9000/

# Run test
$ docker run --entrypoint=/bin/bash delivr-build -c "npm test"
```

### On your device

```sh
# Install yarn
$ npm install -g yarn

# Install dependencies
$ yarn

# Serves content in dev mode
$ npm start

# Unit tests
$ npm test
```

## Tada

- Add departure time
- Use backend proxy for api calls (hides token)
- More tests (unit / e2e)
- Handle cross-browsers issues
- Handle mobile devices
- Fix CI (docker build image is too big and makes docker authentication token expire before image is actually built)
- Optimize `<MapContainer />` rendering strategy (smart diff ?)
- Host project somewhere
- Prune dependencies
