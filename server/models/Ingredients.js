const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    group: {
        type: String,
        required: true,
    },
    nutrients: {
        type: String,
        required: true,
    },
});

// connect to food collection. Export functionality to other parts of code.   
const ItemModel = mongoose.model("foods", ItemSchema);
module.exports = ItemModel;