const router = require("express").Router();
const userRoutes = require("./api/users");
const listingRoutes = require("./api/listings");

router.use("./api/users", userRoutes);

router.use("./api/listings", listingRoutes);
module.exports = router;