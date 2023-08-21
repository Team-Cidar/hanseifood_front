FROM node:18.16.0 AS react-builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend /app
RUN npm run dev-build

FROM nginx:alpine
COPY --from=react-builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8001
