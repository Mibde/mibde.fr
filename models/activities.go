package models

import "time"

type Activities struct {
	Id        int `orm:"unique"`
	Titre     string
	Date      time.Time `orm:"type(datetime)"`
	Categorie string
	info      string `orm:"null"`
}
