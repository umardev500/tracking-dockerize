package delivery

import (
	"encoding/json"
	"strconv"

	"github.com/labstack/echo/v4"
	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/service/api"
)

type ContactDelivery struct {
	ContactService api.ContactService
}

func NewContactDelivery() *ContactDelivery {
	return &ContactDelivery{}
}

// Create message
func (cd *ContactDelivery) Send(c echo.Context) error {
	var data entity.ContactEntity

	err := json.NewDecoder(c.Request().Body).Decode(&data)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	err = cd.ContactService.Send(data)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, "Mail sended")
}

// Delete message
func (cd *ContactDelivery) Delete(c echo.Context) error {
	var id = c.QueryParam("id")

	idMsg, err := strconv.Atoi(id)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	err = cd.ContactService.Delete(idMsg)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, "Message deleted")
}

func (cd *ContactDelivery) ContactById(c echo.Context) error {
	var id = c.QueryParam("id")
	idMsg, err := strconv.Atoi(id)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	res, err := cd.ContactService.ContactBtId(idMsg)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, res)
}

func (cd *ContactDelivery) ContactAll(c echo.Context) error {
	res, err := cd.ContactService.ContactAll()
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	return c.JSON(200, res)
}
