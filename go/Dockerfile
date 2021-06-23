FROM golang:alpine

WORKDIR /usr/app
COPY ./ ./
RUN go mod tidy
RUN ./start.sh

EXPOSE 5000
