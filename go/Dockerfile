FROM golang:alpine

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN go mod tidy

RUN go build -o main .

CMD ["/app/main"]