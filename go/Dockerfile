FROM golang:alpine

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN go run migration/*.go

RUN go build -o main .

CMD ["/app/main"]