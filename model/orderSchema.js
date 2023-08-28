var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    id: String,
    datetime: String,
    totalfee: Number,
    services: [{
        id: String
    }]
});
// Export the model
module.exports = mongoose.model("Orders", orderSchema);
