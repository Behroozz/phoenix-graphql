# Server

# Typescript
tsc --init

# Build
```
docker build -t btabe0914/live-cms-server .
```

# How to check/update common dependencies
```
npm update @vrshared/common@1.0.1
```

## check
```
k get pods
k exec -it live-cms-server-depl-5dc7774d77-lvvg7 sh
ls -lsa
cd node_modules/
cd @vrshared/
cd common/
cat package.json
check the version
```