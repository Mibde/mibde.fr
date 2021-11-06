package models

import (
	"fmt"
	"os"

	"github.com/beego/beego/v2/adapter/orm"
)

func GetDsn() string {
	return os.Getenv("MARIADB_USER") + ":" + os.Getenv("MARIADB_PASSWORD") + "@/" + os.Getenv("MARIADB_DATABASE") + "?charset=utf8"
}

func Init() {
	orm.RegisterModel(new(Activities), new(Recents))

	orm.RegisterDriver("mysql", orm.DRMySQL)

	orm.RegisterDataBase("default", "mysql", GetDsn())

	if err := orm.RunSyncdb("default", false, true); err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Sync")
	}

}
