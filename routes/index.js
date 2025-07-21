const express = require('express');
const router = express.Router();
router.get("/", async(req, res) => {
	return res.status(200).send({message:'ai-o-siranai'})
})
module.exports = router;