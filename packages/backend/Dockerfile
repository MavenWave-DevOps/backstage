# Use yarn image to compile backend package
FROM gcr.io/cloud-builders/yarn as build
WORKDIR /build
COPY ./* ./

RUN yarn --cwd packages/backend install
RUN yarn --cwd packages/backend tsc
RUN yarn --cwd packages/backend build


FROM node:16-bullseye-slim

WORKDIR /app

COPY --from=build /build/yarn.lock /build/package.json /build/packages/backend/dist/skeleton.tar.gz ./
RUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz

# install sqlite3 dependencies
RUN apt-get update && \
    apt-get install -y libsqlite3-dev python3 cmake g++ && \
    rm -rf /var/lib/apt/lists/* && \
    yarn config set python /usr/bin/python3

RUN yarn install --frozen-lockfile --production --network-timeout 300000 && rm -rf "$(yarn cache dir)"

COPY --from=build /build/packages/backend/dist/bundle.tar.gz /build/app-config.yaml ./
RUN tar xzf bundle.tar.gz && rm bundle.tar.gz

RUN chmod 755 /app

CMD ["node", "packages/backend", "--config", "app-config.yaml"]

