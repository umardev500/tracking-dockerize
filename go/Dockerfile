FROM golang:alpine

WORKDIR /usr/app
COPY ./ ./
RUN go mod tidy
RUN ls
ADD start.sh ./start.sh

EXPOSE 5000
CMD [./start]

