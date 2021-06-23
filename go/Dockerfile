FROM golang:alpine

WORKDIR /usr/app
COPY ./ ./
RUN go mod tidy

EXPOSE 8000
