package main

import (
	models "mibde/models"
	_ "mibde/routers"

	beego "github.com/beego/beego/v2/server/web"

	_ "github.com/go-sql-driver/mysql"
)

func init() {
	models.Init()

}

func main() {
	beego.Run()

}
