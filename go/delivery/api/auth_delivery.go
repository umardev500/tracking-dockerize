package delivery

import (
	"encoding/json"

	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo/v4"
	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/service/api"
)

type AuthDelivery struct {
	AuthService api.AuthService
}

func NewAuthDelivery() *AuthDelivery {
	return &AuthDelivery{}
}

func (ad *AuthDelivery) Login(c echo.Context) error {
	var authData entity.Admin

	err := json.NewDecoder(c.Request().Body).Decode(&authData)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	data, err := ad.AuthService.Login(authData)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})

	}

	return c.JSON(200, data)
}

func (ad *AuthDelivery) Change(c echo.Context) error {
	var authData entity.Admin
	var user = c.Get("user").(*jwt.Token)
	var claims = user.Claims.(jwt.MapClaims)

	var username = claims["user"].(string);

	err := json.NewDecoder(c.Request().Body).Decode(&authData)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	if authData.User == "" || authData.Pass == "" {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})
	}

	err = ad.AuthService.Change(username, authData)
	if err != nil {
		return c.JSON(500, Failed{Status: Status{Code: 500, Description: "Internal server error"}})	
	}

	return c.JSON(200, authData)
}

func (ad *AuthDelivery) Check(c echo.Context) error {
	return c.JSON(200, "Authenticated")
}

func (ad *AuthDelivery) Logout(c echo.Context) error {
	return c.JSON(200, "lougout success")
}
