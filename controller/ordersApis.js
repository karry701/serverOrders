var Orders = require("../model/orderSchema");

var result = {
    status: 200,
    data: ""
}
exports.orderGetById = function (req, res, next) {
    Orders.find({ id: { $in: req.body.id } })
        .then(docs => {
            console.log(docs[0]._doc);
            result.data = docs[0]._doc;
            res.json(result);
        })
        .catch(err => res.send({ status: 500, err }))
};

exports.allOrders = function (req, res, next) {
    Orders.find({})
        .then(docs => {
            console.log(docs);
            result.data = docs;
            res.json(result);
        })
        .catch(err => res.send({ status: 500, err }))
}

exports.orderInsert = function (req, res, next) {
    let orders = new Orders(req.body);
    orders.save()
        .then(doc => {
            result.data = doc;
            res.send(result);
            console.log(doc);
        })
        .catch(err => res.send({ status: 500, err }))

}

exports.orderUpdateById = function (req, res, next) {
    let query = { id: req.body.id };
    let condition = { $set: { totalfee: req.body.totalfee } };
    Orders.updateOne(query, condition)
        .then(doc => {
            result.data = doc;
            res.send(result);
            console.log(doc);
        })
        .catch(err => res.send({ status: 500, err }))
}

exports.orderDeleteById = function (req, res, next) {
    let query = { id: req.body.id };
    Orders.deleteOne(query)
        .then(doc => {
            result.data = doc;
            res.send(result);
            console.log(doc);
        })
        .catch(err => res.send({ status: 500, err }))
}
