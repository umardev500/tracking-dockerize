package models

type CourierModel struct {
	ID          uint   `gorm:"primaryKey;autoIncrement;not null" json:"id"`
	Title       string `gorm:"not null" json:"title"`
	Slug        string `gorm:"not null" json:"slug"`
	Value       string `gorm:"not null" json:"value"`
	Description string `gorm:"not null" json:"description"`
}

func (CourierModel) TableName() string {
	return "courier"
}
