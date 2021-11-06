package main

import (
	"fmt"
	_ "mibde/routers"
	"os"

	"github.com/beego/beego/v2/client/orm"
	beego "github.com/beego/beego/v2/server/web"
	_ "github.com/go-sql-driver/mysql"
)

func getDsn() string {
	return os.Getenv("MARIADB_USER") + ":" + os.Getenv("MARIADB_PASSWORD") + "@/" + os.Getenv("MARIADB_DATABASE") + "?charset=utf8"
}

func init() {
	orm.RegisterDriver("mysql", orm.DRMySQL)
	fmt.Println(getDsn())
	// 	orm.SetMaxIdleConns("default", 30)

	orm.RegisterDataBase("default", "mysql", getDsn())

}

func main() {
	// o := orm.NewOrm()

	beego.Run()
}
