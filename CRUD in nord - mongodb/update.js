const dbconnect = require('./index');

const updateData = async ()=>{
    let data = await dbconnect();
    let result = await data.updateMany(
        {living:"bhavnagar"},
        {$set : {living:"Bhavnagar"}}
    )

    console.warn(result);
}

updateData();
    