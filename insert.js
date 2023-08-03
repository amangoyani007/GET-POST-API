const dbconnect = require('./mongodb');

const insert =async ()=>{
    const db = await dbconnect();
    const result = db.insertOne(
        {name:"Naman"}
    );
}

insert();
