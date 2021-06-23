package api

import (
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/repository/api"
)

type AuthService struct {
	AuthRepository api.AuthRepository
}

func (as *AuthService) Login(authData entity.Admin) (string, error) {
	data, err := as.AuthRepository.Login(authData)

	if err != nil {
		return "", err
	}

	// Create token
	token := jwt.New(jwt.SigningMethodHS256)

	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["user"] = data.User
	claims["admin"] = true
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	t, err := token.SignedString([]byte("hello"))
	if err != nil {
		return "", err
	}

	return t, nil
}

func (as *AuthService) Change(username string, authData entity.Admin) error {
	err := as.AuthRepository.Change(username, authData);
	if err != nil {
		return err
	}

	return nil
}
