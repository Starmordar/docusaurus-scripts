# Stage 1 (named "builder"): Production React Build
FROM node:16 as builder

WORKDIR /help-center

COPY package*.json  ./
RUN npm ci --production

COPY . ./

RUN npm run build

# Stage 2: Start fresh, install a static server,
# and copy just the build artifacts from the previous stage.
FROM nginx:1.16.0-alpine

COPY --from=builder /help-center/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /help-center/build /usr/share/nginx/html/help

# Run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]