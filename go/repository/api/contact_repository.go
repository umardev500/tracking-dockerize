package api

import (
	"errors"
	"fmt"

	"github.com/umardevid/go-resi-ongkir/config"
	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/models"
)

type ContactRepository struct{}

func (cs *ContactRepository) Send(contactData entity.ContactEntity) error {
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

	contact := models.ContactModel{Email: contactData.Email, Message: contactData.Message}
	res := db.Create(&contact)

	if res.Error != nil {
		return err
	}

	return nil
}

// Delete message by id
func (cs *ContactRepository) Delete(id int) error {
	var contact models.ContactModel

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

	// Doing delete
	res := db.Delete(&contact, id)
	if res.Error != nil || res.RowsAffected < 1 {
		return errors.New("Data not deleted")
	}

	return nil
}

// Get contact by id
func (cr *ContactRepository) ContactById(id int) (models.ContactModel, error) {
	var result models.ContactModel

	db, err := config.NewConn()
	if err != nil {
		fmt.Println(err)
		return models.ContactModel{}, err
	}

	sqlDb, err := db.DB()
	if err != nil {
		fmt.Println(err)
		return models.ContactModel{}, err
	}

	defer sqlDb.Close()

	res := db.First(&result, id)

	if res.Error != nil {
		return models.ContactModel{}, res.Error
	}

	return result, nil

}

// Get all message
func (cr *ContactRepository) GetAll() ([]models.ContactModel, error) {
	var result []models.ContactModel

	db, err := config.NewConn()
	if err != nil {
		fmt.Println(err)
		return []models.ContactModel{}, err
	}

	sqlDb, err := db.DB()
	if err != nil {
		fmt.Println(err)
		return []models.ContactModel{}, err
	}

	defer sqlDb.Close()

	res := db.Find(&result)

	fmt.Println(res.RowsAffected)

	return result, nil

}
