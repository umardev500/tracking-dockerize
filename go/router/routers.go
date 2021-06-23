package router

import (
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	delivery "github.com/umardevid/go-resi-ongkir/delivery/api"
)

func Run(router *echo.Echo) {
	var key = os.Getenv("RAJAONGKIRKEY")
	waybillDelivery := delivery.NewWaybillDelivery(key)
	costDelivery := delivery.NewCostDelivery(key)
	courierDelivery := delivery.NewCourierDelivery(key)
	contactDelivery := delivery.NewContactDelivery()
	authDelivery := delivery.NewAuthDelivery()

	api := router.Group("/api")

	api.POST("/waybill-check", waybillDelivery.WaybillCheck)
	api.GET("/province", costDelivery.Province)
	api.GET("/city", costDelivery.CityById)
	api.GET("/subdistrict", costDelivery.SubDistrictById)
	api.POST("/cost", costDelivery.Cost)
	api.GET("/courier", courierDelivery.CourierById)
	api.POST("/send-message", contactDelivery.Send)
	api.DELETE("/message", contactDelivery.Delete)
	api.GET("/message", contactDelivery.ContactById)
	api.GET("/all-message", contactDelivery.ContactAll)
	api.POST("/create-courier", courierDelivery.Create)
	api.GET("/courier-all", courierDelivery.CourierAl)
	api.DELETE("/courier", courierDelivery.Delete)
	api.PUT("/courier", courierDelivery.Update)
	api.POST("/login", authDelivery.Login)

	// Auth
	admin := router.Group("/api")
	admin.Use(middleware.JWT([]byte("hello")))

	admin.GET("/cek-login", authDelivery.Check)
	admin.POST("/change-account", authDelivery.Change)
	admin.GET("/logout", authDelivery.Logout)
}
