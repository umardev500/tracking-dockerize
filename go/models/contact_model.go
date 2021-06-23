package models

import (
	"encoding/json"
	"time"
)

type ContactModel struct {
	ID        uint      `gorm:"primaryKey;not null" json:"id"`
	Email     string    `gorm:"not null" json:"email"`
	Message   string    `gorm:"not null" json:"message"`
	CreatedAt time.Time `json:"created"`
}

func (d *ContactModel) MarshalJSON() ([]byte, error) {
	type Alias ContactModel
	return json.Marshal(&struct {
		*Alias
		Stamp string `json:"humantime"`
	}{
		Alias: (*Alias)(d),
		Stamp: d.CreatedAt.Format("Mon Jan _2"),
	})
}

func (*ContactModel) TableName() string {
	return "contact"
}
