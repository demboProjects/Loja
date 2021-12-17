import { createConnection } from "typeorm";

createConnection().then(connection => {

}).catch(err => {
    console.log("unable no connect to database", err);
});

