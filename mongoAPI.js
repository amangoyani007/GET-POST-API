const dbconnect = require('./mongodb');

// dbconnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })
// dbconnect();

const main = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn(data);
}

main()
