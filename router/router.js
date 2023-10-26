const express  = require('express')
const router = express.Router()

const {getOne, getAll, putOne, updateOne, delOne} = require('../controller/handler.js')

//router config
router.route('/').get(getAll).post(putOne)
router.route('/:id').get(getOne).patch(updateOne).delete(delOne)

module.exports = router