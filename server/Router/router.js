const express = require('express');
const controller = require('../Controller/controller');
const router = express.Router();

router.get('/donors', controller.getDonors);
router.post('/donors', controller.addDonor);
router.put('/donors', controller.updateDonor);
router.delete('/donors/:id', controller.deleteDonor);

module.exports = router;