# syntax=docker/dockerfile:1.2

FROM node:lts as build
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false
WORKDIR /app
COPY . ./
RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginxinc/nginx-unprivileged:1.23.3

ENV PORT 8080
ENV HOST 0.0.0.0

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

USER nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
