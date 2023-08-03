const dbconnect = require('./mongodb');

const updateData = async () => {
    let data = await dbconnect();
    let result = await data.updateOne(
        { name: "Naman" },
        { $set: { name: "Naman Ghevariya" } }
    );
    console.warn(result);
}

updateData();
