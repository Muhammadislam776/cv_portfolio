# Multistage Dockerfile: Express Backend API Server
# Build Stage
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

# Production Stage
FROM node:18-alpine
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

EXPOSE 5000
ENV NODE_ENV=production

CMD ["npm", "start"]
