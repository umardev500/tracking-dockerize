package delivery

import (
	"encoding/json"

	"github.com/labstack/echo/v4"
	"github.com/umardevid/go-resi-ongkir/entity"
	service "github.com/umardevid/go-resi-ongkir/service/api"
)

type CostDelivery struct {
	Key         string
	CostService service.CostService
}

type Status struct {
	Code        int    `json:"code"`
	Description string `json:"description"`
}

type Failed struct {
	Status Status `json:"status"`
}

func NewCostDelivery(key string) *CostDelivery {
	return &CostDelivery{Key: key, CostService: service.CostService{Key: key}}
}

func (cd *CostDelivery) Province(c echo.Context) error {
	result, err := cd.CostService.Province()

	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, result)
}

// Get the city by province id
func (cd *CostDelivery) CityById(c echo.Context) error {
	var provinceID = c.QueryParam("province")

	result, err := cd.CostService.CityById(provinceID)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, result)
}

// Get the subdisctrict by city id
func (cd *CostDelivery) SubDistrictById(c echo.Context) error {
	var cityID = c.QueryParam("city")

	result, err := cd.CostService.SubDistrictById(cityID)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, result)
}

// Get the cost
func (cd *CostDelivery) Cost(c echo.Context) error {
	var costData entity.CostEntity

	err := json.NewDecoder(c.Request().Body).Decode(&costData)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	result, err := cd.CostService.Cost(costData)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, result)
}
