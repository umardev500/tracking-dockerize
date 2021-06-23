package delivery

import (
	"encoding/json"

	"github.com/labstack/echo/v4"
	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/service/api"
)

type CourierDelivery struct {
	Key            string
	CourierService api.CourierService
}

func NewCourierDelivery(key string) *CourierDelivery {
	return &CourierDelivery{Key: key, CourierService: api.CourierService{Key: key}}
}

func (cd *CourierDelivery) CourierById(c echo.Context) error {
	var id = c.QueryParam("slug")

	result, err := cd.CourierService.CourierById(id)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Status internal server error"}})
	}

	if result.ID == 0 {
		return c.JSON(404, Failed{Status: Status{Code: 404, Description: "Page not found"}})
	}

	return c.JSON(200, result)
}

// Create delivery
func (cd *CourierDelivery) Create(c echo.Context) error {
	var courier entity.CourierEntity

	err := json.NewDecoder(c.Request().Body).Decode(&courier)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	err = cd.CourierService.Create(courier)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, "created")
}

// Find All courier
func (cd *CourierDelivery) CourierAl(c echo.Context) error {
	res, err := cd.CourierService.CourierAll()
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, res)
}

// Delete by id
func (cd *CourierDelivery) Delete(c echo.Context) error {
	var id = c.QueryParam("id")
	err := cd.CourierService.Delete(id)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, "deleted")

}

// Update by id

func (cd *CourierDelivery) Update(c echo.Context) error {
	var id = c.QueryParam("id")
	var data entity.CourierEntity

	err := json.NewDecoder(c.Request().Body).Decode(&data)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	err = cd.CourierService.Update(id, data)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, "updated")
}
