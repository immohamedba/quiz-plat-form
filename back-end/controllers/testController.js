const Test = require('../models/testModel');
const cors =require ('cors')
// get all test
const getTests = async (req, res) => {
    const tests = await Test.find({}).sort({ createdAt: -1 })
    res.status(200).json(tests);
}

// get single test
const getTest = async (req, res) => {
    const { id } = req.params;
    const test = await Test.findById(id)

    if (!test) {
        return res.status(404).json({ error: 'No such test' })
    }
    res.status(200).json(test);
}

// create new test

const createTest = async (req, res) => {
    const { _id, name, category, trainerID, trainerName, duration, description, nbQuestion, scoreReq,
        rating, disponibility, subdomains, access,questions, sessions } = req.body;
    try {
        const test = await Test.create({
            _id, name, category, trainerID, trainerName, duration, description, nbQuestion, scoreReq, rating,
            disponibility, subdomains, access, questions, sessions
        })
        res.status(200).json(test)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}
// delete a test
const deleteTest = async (req, res) => {
    const { id } = req.params;

    const test = await Test.findByIdAndDelete({ _id: id });
    if (!test) {
        return res.status(404).json({ error: 'No such test' })
    }
    res.status(200).json(test)
}
// update test 
const updateTest = async (req, res) => {
    const { id } = req.params;
    const test = await Test.findByIdAndUpdate(
        { _id: id },
        { ...req.body }
    )
    if (!test) {
        return res.status(404).json({ error: 'No such test' })
    }
    res.status(200).json(test)
}

const downloadTestFile =async (req, res) => {
    res.download('./questions_template.json')
}
module.exports = {
    createTest,
    getTests,
    getTest,
    deleteTest,
    updateTest,
    downloadTestFile
}