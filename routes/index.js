const express = require('express');

const router = express.Router();

router.get("/", async (req, res) => {
	console.log(12345)
  return res.status(200).send({ message: 'ppung' });
});
router.use("/user", require("./user"))

module.exports = router;
