# Buliding Client

Run
```
docker build -t btabe0914/client .
```

Push to dockerhub
```
docker push btabe0914/client
```

Prepare depl file for Kubernetee

- If Changes not reflecting
```
K get pods
```

```
k delete pod [client-pod-name]
```

Run CodeGen
```
schema=http://localhost:4000/graphql
or 
schema=https://live-event-manager.dev/graphql
```