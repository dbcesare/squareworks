# Weather app
App to take in an address and display the weather for the current day and the next day.

React frontend
node+express backend

build with docker-compose

## Local build
docker and docker-compose required.
clone the repo and cd into `squareworks` at the top level just run `docker-compose up -d`

To manually build first `cd squareworks/squareworks && npm install && npm start`
then `cd ../squareworks-api && npm install && npm start`

Open browser and navigate to `localhost/address` or `localhost:3000/address` for docker-compose build or manual builds respectively.
