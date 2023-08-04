const connection = require('./config');

const deleteData = async () => {
    let data = await connection();
    let result =  data.deleteMany({name:"Hello"});
    console.warn(data);
}

deleteData();