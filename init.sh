#!bin/bash
docker exec -it interact-mongo mongo
use interact
db.createCollection("customer")
db.createCollection("user")
db.customer.insert({"customerCode":"IC9-55938-5","hostname":"localhost","features":[{"name":"card-1","types":[{"typeName":"A","percent":0},{"typename":"B","percent":0}]},{"name":"card-2","types":[{"typeName":"A","percent":0},{"typename":"B","percent":0}]}]})
exit