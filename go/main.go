package main

import (
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/umardevid/go-resi-ongkir/migration"
	"github.com/umardevid/go-resi-ongkir/router"
)

func main() {
	port := os.Getenv("PORT")
	migration.Migrasi()

	e := echo.New()

	e.Use(middleware.CORS())

	router.Run(e)

	// Running
	e.Logger.Fatal(e.Start(port))
}
