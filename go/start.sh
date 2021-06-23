#!/bin/ash

export PORT=":5000" # you can change this port
export RAJAONGKIRKEY="553c7982c1e8205443b4ad8d584e399e"
# root = user hello = password waybill_cost=database
export DSN="server:hello@tcp(db:3306)/waybill_cost?charset=utf8mb4&parseTime=True&loc=Local"

go run main.go

exit 0
