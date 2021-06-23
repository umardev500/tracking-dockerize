FROM node:alpine

WORKDIR /usr/app
RUN yarn --version
RUN npm install --global pm2
COPY ./package*.json ./
COPY ./ ./
RUN yarn install
RUN yarn build
EXPOSE 5000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]