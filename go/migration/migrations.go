package main

import (
    "fmt"
    "os"

    "github.com/umardevid/go-resi-ongkir/entity"
    "github.com/umardevid/go-resi-ongkir/models"
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
)

func main() {
    var dsn = os.Getenv("DSN")
    // dsn := "server:hello@tcp(localhost)/waybill_cost?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        fmt.Println(err)
        return
    }

    // Drop table
    // to disable auto drop then you can escape single line of code below
    // START
    db.Migrator().DropTable(&models.CourierModel{}, &models.ContactModel{}, &entity.Admin{})
    // END

    // Running auto migrate
    db.AutoMigrate(&models.CourierModel{}, &models.ContactModel{}, &entity.Admin{})

    // Insert dummy data
    // Escape insert line if you not want from start to end
    // START
    courier := models.CourierModel{Title: "Cek resi wahana", Slug: "cek-resi-wahana", Value: "wahana", Description: "Description wahana"}
    db.Create(&courier)
    courier2 := models.CourierModel{Title: "Cek resi jnt", Slug: "cek-resi-jnt", Value: "jnt", Description: "Description for jnt"}
    db.Create(&courier2)
    courier3 := models.CourierModel{Title: "Cek resi pos", Slug: "cek-resi-pos", Value: "pos", Description: "Description pos"}
    db.Create(&courier3)

    contact := models.ContactModel{Email: "first@gmail.com", Message: "First message"}
    db.Create(&contact)
    contact1 := models.ContactModel{Email: "second@gmail.com", Message: "Second message"}
    db.Create(&contact1)
    contact2 := models.ContactModel{Email: "third@gmail.com", Message: "Third message"}
    db.Create(&contact2)
    // END

    // Set admin password
    user := entity.Admin{User: "admin", Pass: "admin"}
    db.Create(&user)

    // To update admin password unescape this line from start to end
    // START
    /*
        var admin entity.Admin
        db.Where("user = ? and pass = ?", "admin", "admin").First(&admin)
        admin.User = "hello"
        admin.Pass = "world"
        db.Save(&admin)
    */
    // END

}
