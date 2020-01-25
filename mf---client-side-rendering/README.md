# Micro Frontend: Web Components [Architecture]

## Install
```
make install
```
## Build
```
make build
```

## Run
For running this Repository you need to start three things.
1. Backend take a look at `MF - Backend-service`
2. Team CDN (`./team-cdn`) provides all the necessary components form each team.
    ```
    make local.run
    ```
3. Team composer (`./team-composer`) composes all components, epxosed by Team CDN, to one page.
    ```
    yarn start
    ```
