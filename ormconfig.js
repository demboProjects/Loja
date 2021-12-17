const dotenv = require("dotenv");

dotenv.config()

module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": `${process.env.PASSWORD}`,
    "database": "dembo",
    "entities": ["entity/*.ts"],
    "migrationsTableName": "migrations",
    "migrations": ["src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/entity"
    }
}