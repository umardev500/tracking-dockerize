package api

import (
	"github.com/umardevid/go-resi-ongkir/entity"
	"github.com/umardevid/go-resi-ongkir/models"
	repository "github.com/umardevid/go-resi-ongkir/repository/api"
)

type ContactService struct {
	ContactRepository repository.ContactRepository
}

func (cs *ContactService) Send(contactData entity.ContactEntity) error {
	err := cs.ContactRepository.Send(contactData)
	if err != nil {
		return err
	}

	return nil
}

// Delete message
func (cs *ContactService) Delete(id int) error {
	err := cs.ContactRepository.Delete(id)
	if err != nil {
		return err
	}

	return nil
}

// Get contact by id
func (cs *ContactService) ContactBtId(id int) (models.ContactModel, error) {
	res, err := cs.ContactRepository.ContactById(id)

	if err != nil {
		return models.ContactModel{}, err
	}

	return res, nil
}

// contact all
func (cs *ContactService) ContactAll() ([]models.ContactModel, error) {
	res, err := cs.ContactRepository.GetAll()
	if err != nil {
		return []models.ContactModel{}, err
	}

	return res, nil
}
