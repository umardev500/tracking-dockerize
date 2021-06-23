#!/bin/bash

export PORT=":8000"
export RAJAONGKIRKEY="553c7982c1e8205443b4ad8d584e399e"
export DSN="root:hello@tcp(localhost)/waybill_cost?charset=utf8mb4&parseTime=True&loc=Local"

nodemon --exec go run main.go --signal SIGTERM

exit 0
