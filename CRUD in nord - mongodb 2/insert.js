const connection = require('./config');

const insert = async ()=> {
    const db = await connection();
    const result = db.insertOne(
        {name:"naman", age:"21", collage:"changa"}
    );
}

insert();