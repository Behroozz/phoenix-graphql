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
