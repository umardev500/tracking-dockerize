FROM node:alpine

WORKDIR /usr/app
RUN yarn --version
RUN npm install --global pm2
COPY ./package*.json ./
COPY ./ ./
RUN ls -la
RUN yarn install
EXPOSE 3000
USER root
CMD [ "pm2-runtime", "yarn start" ]
