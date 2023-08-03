const dbconnect = require('./index');

const deleteData = async ()=>{
    let data = await dbconnect();
    let result = data.deleteOne({name:"aman"});
    console.warn(data);
}

deleteData();