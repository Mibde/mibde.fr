package models

import "time"

type Recents struct {
	Id      int       `orm:"unique"`
	Date    time.Time `orm:"type(datetime)"`
	Message string
}
