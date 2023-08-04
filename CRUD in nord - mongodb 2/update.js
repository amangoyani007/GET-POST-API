const connection = require('./config');

const update = async () => {
    let data = await connection();
    let result = await data.updateMany(
        {name:"naman"},
        {$set:{name:"Naman"}}
    )
    console.warn(result);
}

update();