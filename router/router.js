const router  = require('mongoose').Router()

const {getOne, getAll, putOne, updateOne, delOne} = require('../controller/handler.js')

//router config
router.route('/').get(getAll).put(putOne)
router.route('/:testId').get(getOne).update(updateOne).delete(delOne)

module.exports = router