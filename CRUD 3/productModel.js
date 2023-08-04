const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please Enter P name"]
        },
        quantity: {
            type: Number,
            require: true,
            default: 0
        },
        price: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
)



const Product = mongoose.model('Product', productSchema);

module.exports = Product;

