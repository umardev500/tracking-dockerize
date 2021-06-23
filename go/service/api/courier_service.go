package api

import (
	"fmt"

	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/models"
	"github.com/umardevid/go-resi-ongkir/repository/api"
)

type CourierService struct {
	Key               string
	CourierRepository api.CourierRepository
}

func (cs *CourierService) CourierById(id string) (models.CourierModel, error) {
	result, err := cs.CourierRepository.CourierById(id)
	if err != nil {
		fmt.Println(err)
		return models.CourierModel{}, nil
	}

	return result, nil
}

// Create courier permalink
func (cs *CourierService) Create(courierData entity.CourierEntity) error {
	err := cs.CourierRepository.Create(courierData)
	if err != nil {
		return err
	}

	return nil
}

// Find all courier
func (cs *CourierService) CourierAll() ([]models.CourierModel, error) {
	res, err := cs.CourierRepository.CourierAll()
	if err != nil {
		return []models.CourierModel{}, err
	}

	return res, nil
}

// Delete by id
func (cs *CourierService) Delete(id string) error {
	err := cs.CourierRepository.Delete(id)
	if err != nil {
		return err
	}

	return nil
}

// update
func (cs *CourierService) Update(id string, courierData entity.CourierEntity) error {
	err := cs.CourierRepository.Update(id, courierData)
	if err != nil {
		return err
	}

	return nil
}
