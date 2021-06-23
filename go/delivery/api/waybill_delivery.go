package delivery

import (
	"encoding/json"
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/umardevid/go-resi-ongkir/entity"
	service "github.com/umardevid/go-resi-ongkir/service/api"
)

type WaybillDelivery struct {
	Key            string
	WaybillService service.WaybillService
}

func NewWaybillDelivery(key string) *WaybillDelivery {
	return &WaybillDelivery{Key: key}
}

func (wd *WaybillDelivery) WaybillCheck(c echo.Context) error {
	var waybillData entity.WaybillInfo

	err := json.NewDecoder(c.Request().Body).Decode(&waybillData)
	if err != nil {
		fmt.Println(err)
		fmt.Println("no value")
		return c.JSON(500, "Internal server error")
	}

	result, err := wd.WaybillService.WaybillCheck(wd.Key, waybillData)
	if err != nil {
		return c.JSON(500, "Internal server error")
	}

	return c.JSON(200, result)
}
