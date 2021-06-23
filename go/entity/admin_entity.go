package entity

type Admin struct {
	ID   uint `gorm:"primaryKey;not null"`
	User string
	Pass string
}

func (Admin) TableName() string {
	return "admin"
}
