FROM golang:alpine

WORKDIR /usr/app
COPY ./ ./
RUN go mod tidy
RUN ls
EXPOSE 5000

