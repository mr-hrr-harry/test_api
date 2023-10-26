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
            return
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
        if (data.length != 0) {
            console.log('Data retrieved successfully!');
            res.json(data)
        }
        else {
            console.log('DB empty! No data found at the moment!');
            res.send('DB empty!')
            return
        }
    } catch (err) {
        console.log('Error:\n', err)
    }
}

//store one user data
//Method: create(), validate(), save()
//POST request
const putOne = async (req, res) => {
    try {
        const { test_id, test_name } = req.body
        if (!test_id || !test_name) {
            console.log('Insufficient or Incorrect data to Enter!')
            res.send('Insufficient or Incorrect data to Enter!')
        }
        else {
            if (await schema.findOne({ test_id: test_id })) {
                console.log('Userid taken already!');
                res.send('Userid taken already!')
                return
            }
            else {
                const data = await schema.create({
                    test_id, test_name
                })
                await data.validate()
                const saved = await data.save()

                console.log('Data inserted!');
                res.json(saved)
            }
        }
    } catch (err) {
        console.log('Error:\n', err)
    }
}

//update one user data
//Method: findOneAndUpdate()
//PATCH request
const updateOne = async (req, res) => {
    try {
        if (await schema.findOne({ test_id: req.params.id })) {
            const data = await schema.findOneAndUpdate({ test_id: req.params.id }, req.body, { new: true })
            console.log('Data updated successfully!')
            res.json(data)
        }
        else {
            console.log('Check the userid! User not found!')
            res.send('User not found!')
            return
        }
    } catch (err) {
        console.log('Error:\n', err)
    }
}

//delete one user data
//Method: deleteMany()
//DELETE request
const delOne = async (req, res) => {
    try {
        if (await schema.findOne({ test_id: req.params.id })) {
            const data = await schema.deleteMany({test_id: req.params.id})
            console.log('User Data deleted Successfully!', data)
            res.send('User Data deleted Successfully!')
        }
        else {
            console.log('Check the userid! User not found!')
            res.send('User not found!')
            return
        }
    } catch (err) {
        console.log('Error:\n', err)
    }
}

module.exports = { getOne, getAll, putOne, updateOne, delOne }