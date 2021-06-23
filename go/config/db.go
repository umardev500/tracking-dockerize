package config

import (
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func NewConn() (*gorm.DB, error) {
	var dsn = os.Getenv("DSN")
	// dsn := `root:hello@tcp(localhost)/waybill_cost?charset=utf8mb4&parseTime=True&loc=Local`
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	return db, nil
}
