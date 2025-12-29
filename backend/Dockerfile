#
# 🧑‍💻 Development
#
FROM node:24.12.0-alpine3.23 AS dev

RUN corepack enable

USER node

WORKDIR /usr/src/app

ENV NODE_ENV=development

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node .yarnrc.yml ./

RUN yarn install \
  --immutable

#
# 🛠️ Production builder
#
FROM node:24.12.0-alpine3.23 AS builder

RUN corepack enable

USER node

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --chown=node:node . .
COPY --chown=node:node --from=dev /usr/src/app/node_modules ./node_modules

RUN yarn build

RUN yarn workspaces focus --production \
  && yarn cache clean --all

#
# 🚀 Production server
#
FROM node:24.12.0-alpine3.23 AS production

USER node

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --chown=node:node --from=builder /usr/src/app/dist ./dist
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/main.js"]
