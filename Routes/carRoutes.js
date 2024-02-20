const express = require("express");
const { protect } = require("../middlewares/protect");
const { createCar, getCars, updateCar, deleteCar } = require("../Controllers/carControllers");


const router = express.Router();

// @ Create car , the end point is /api/cars  ,    // private
router.post("/", protect, createCar);

//@ Get cars  /api/cars
router.get("/",getCars);

//@ update car
router.put("/:id", updateCar );

// delete car

router.delete("/:id", deleteCar);

module.exports = router;