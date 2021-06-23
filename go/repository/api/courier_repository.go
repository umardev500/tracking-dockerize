package api

import (
	"errors"
	"fmt"

	"github.com/umardevid/go-resi-ongkir/config"
	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/models"
)

type CourierRepository struct{}

func (cr *CourierRepository) CourierById(id string) (models.CourierModel, error) {
	var courier models.CourierModel

	db, err := config.NewConn()
	if err != nil {
		return models.CourierModel{}, err
	}

	sqlDB, err := db.DB()
	if err != nil {
		return models.CourierModel{}, err
	}

	defer sqlDB.Close()

	res := db.Where("slug = ?", id).First(&courier)

	if res.Error != nil {
		return models.CourierModel{}, err
	}

	return courier, nil
}

// Create courier permalink
func (cr *CourierRepository) Create(courierData entity.CourierEntity) error {
	fmt.Println(courierData)

	db, err := config.NewConn()
	if err != nil {
		return err
	}

	sqlDB, err := db.DB()
	if err != nil {
		return err
	}

	defer sqlDB.Close()

	courier := models.CourierModel{Title: courierData.Title, Slug: courierData.Slug, Value: courierData.Value, Description: courierData.Description}

	res := db.Create(&courier)

	if res.Error != nil {
		return res.Error
	}

	return nil
}

// Get all courier
func (cr *CourierRepository) CourierAll() ([]models.CourierModel, error) {
	var couriers []models.CourierModel

	db, err := config.NewConn()
	if err != nil {
		return []models.CourierModel{}, err
	}

	sqlDB, err := db.DB()
	if err != nil {
		return []models.CourierModel{}, err
	}

	defer sqlDB.Close()

	res := db.Find(&couriers)

	if res.Error != nil {
		return []models.CourierModel{}, err
	}

	return couriers, nil
}

// Delete courier by id
func (cr *CourierRepository) Delete(id string) error {
	var courier models.CourierModel
	db, err := config.NewConn()
	if err != nil {
		return err
	}

	sqlDB, err := db.DB()
	if err != nil {
		return err
	}

	defer sqlDB.Close()

	res := db.Delete(&courier, id)

	if res.Error != nil {
		return res.Error
	}

	return nil
}

// Update
func (cr *CourierRepository) Update(id string, courierData entity.CourierEntity) error {

	var courier models.CourierModel
	db, err := config.NewConn()
	if err != nil {
		return err
	}

	sqlDB, err := db.DB()
	if err != nil {
		return err
	}

	defer sqlDB.Close()

	res := db.First(&courier, id)
	if res.Error != nil {
		return res.Error
	}

	courier.Title = courierData.Title
	courier.Slug = courierData.Slug
	courier.Value = courierData.Value
	courier.Description = courierData.Description

	res = db.Save(&courier)

	if res.Error != nil {
		return res.Error
	}

	if res.RowsAffected == 0 {
		return errors.New("not updated")
	}

	return nil
}
