# syntax=docker/dockerfile:1
FROM node:14.15.4

ENV NODE_ENV=development

WORKDIR /test_suite

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN chmod +x ./bootstrap.sh

ENTRYPOINT [ "./bootstrap.sh" ]