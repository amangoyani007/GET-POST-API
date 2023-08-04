const connection = require('./config');

const display = async () => {
    let data = await connection();
    data = await data.find().toArray();
    console.warn(data);
}

display();