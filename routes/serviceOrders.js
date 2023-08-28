var express = require("express");
var router = express.Router();

//Import the controller
var orderController = require("../controller/ordersApis");

//Define the route for API

router.post("/orders/insert", orderController.orderInsert);

router.get("/orders/getById", orderController.orderGetById);

router.get("/orders", orderController.allOrders);

router.put('/orders/updateById', orderController.orderUpdateById);

router.delete('/orders/deleteById', orderController.orderDeleteById);

module.exports = router;
