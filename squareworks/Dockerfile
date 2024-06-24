FROM node:20

WORKDIR /app


COPY package.json .
RUN apt update
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]
# FROM node:20-bookworm-slim AS dev

# WORKDIR /app
# COPY package.json ./

# RUN npm ci

# FROM node:20 AS production

# RUN apt update
# WORKDIR /app

# COPY package.json .
# RUN ls -al && npm install

# FROM production AS build

# WORKDIR /app
# COPY --from=production /app/node_modules /app/node_modules
# COPY . .
# RUN npm run build

# FROM production

# WORKDIR /app
# COPY --from=build /app/node_modules /app/node_modules
# COPY --from=build /app/build /app/build

