const dbconnect = require('./index');

const insert = async ()=>{
    const db = await dbconnect();
    const result = db.insertOne(
        {name:"Param", age:21, living:"bhavnagar"}
    );
}

insert();
