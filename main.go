package main

import (
	"fmt"
	models "mibde/models"
	_ "mibde/routers"

	beego "github.com/beego/beego/v2/server/web"

	"github.com/beego/beego/v2/adapter/orm"
	_ "github.com/go-sql-driver/mysql"
)

func init() {

	models.Init()

	err := orm.RunSyncdb("default", false, true)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Sunc")
	}

}

func main() {
	beego.Run()

}
