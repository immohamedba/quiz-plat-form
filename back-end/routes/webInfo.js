const express = require('express');
const {
    getWebInfo,
    createWebInfo,
    deleteWebInfo,
    updateWebInfo
}= require('../controllers/webInfoController');

const router = express.Router();

//Get all WebInfo
router.get('/', getWebInfo)

//Get a single WebInfo
router.get('/:id', getWebInfo)

//Post a new WebInfo
router.post('/',createWebInfo);

//delete a WebInfo
router.delete('/:id', deleteWebInfo)

// update a WebInfo
router.patch('/:id',updateWebInfo)

module.exports = router;