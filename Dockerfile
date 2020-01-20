# BUILD
FROM node:lts-alpine as buildstep
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build

# PRODUCTION
FROM nginx:1.16.0-alpine
COPY --from=buildstep /app/build /usr/share/nginx/html

EXPOSE 80 443
