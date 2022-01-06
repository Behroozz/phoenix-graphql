FROM node:alpine

WORKDIR /app
COPY package.json .
## to aovid re-downloading dev dependencies
RUN npm install --only=prod 
## copy everything to app folder
COPY . .

CMD ["npm", "start"]