package api

import (
	"errors"
	"fmt"

	"github.com/umardevid/go-resi-ongkir/config"
	"github.com/umardevid/go-resi-ongkir/entity"
)

type AuthRepository struct{}

func (ar *AuthRepository) Login(authData entity.Admin) (entity.Admin, error) {
	var result entity.Admin

	db, err := config.NewConn()
	if err != nil {
		fmt.Println(err)
		return result, err
	}

	sqlDb, err := db.DB()
	if err != nil {
		fmt.Println(err)
		return result, err
	}

	defer sqlDb.Close()

	res := db.Where("user = ? and pass = ?", authData.User, authData.Pass).First(&result)

	if res.Error != nil {
		return result, res.Error
	}

	if res.Error != nil {
		return result, res.Error
	}

	if res.RowsAffected < 1 {
		return result, errors.New("not found")
	}

	return result, nil
}

func (ar *AuthRepository) Change(user string, authData entity.Admin) error {
	var result entity.Admin

	db, err := config.NewConn()
	if err != nil {
		fmt.Println(err)
		return err
	}

	sqlDb, err := db.DB()
	if err != nil {
		fmt.Println(err)
		return err
	}

	defer sqlDb.Close()

	res := db.Where("user = ?", user).First(&result)
	result.User = authData.User
	result.Pass = authData.Pass
	saveDb := db.Save(&result)

	if res.RowsAffected == 0 || res.Error != nil || saveDb.Error != nil || saveDb.RowsAffected == 0 {
		return errors.New("Not found")
	}


	return nil

}
