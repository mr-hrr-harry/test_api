const schema = require('../model/schema.js')

//retrieve one user data
//Method: findOne()
//GET request
const getOne = async (req, res) => {
    try {
        const data = await schema.findOne({ test_id: req.params.id })
        if (data) {
            console.log('Data Fetched successfully!');
            res.json(data)
        }
        else {
            console.log('Check the userid! User not found!')
            res.send('User not found!')
        }
    } catch (err) {
        console.log('Error:\n', err)
    }
}

//retrieve all users data
//Method: find()
//GET request
const getAll = async (req, res) => {
    try {
        const data = await schema.find()
        if(data.length!=0){
            console.log('Data retrieved successfully!');
            res.json(data)
        }
        else{
            console.log('DB empty! No data found at the moment!');
            res.send('DB empty!')
        }
    } catch (err) {
        console.log('Error:\n', err)
    }
}

//store one user data
//Method: create(), validate(), save()
//POST request
const putOne = async (req, res) => {

}

//update one user data
//Method: findOneAndUpdate()
//PATCH request
const updateOne = async (req, res) => {

}

//delete one user data
//Method: deleteMany()
//DELETE request
const delOne = async (req, res) => {

}

module.exports = { getOne, getAll, putOne, updateOne, delOne }