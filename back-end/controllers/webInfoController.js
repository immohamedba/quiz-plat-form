const webInfo = require('../models/websiteInfoModel');

const getWebInfo = async (req, res) => {
    const info = await webInfo.find({}).sort({ createdAt: -1 })
    res.status(200).json(info);
}

//create
const createWebInfo = async (req, res) => {
    const { ilefDescription, service } = req.body;
    try {
        const info = await webInfo.create({ ilefDescription, service })
        res.status(200).json(info)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

// delete infos
const deleteWebInfo = async (req, res) => {
    const { id } = req.params;
    const info = await webInfo.findByIdAndDelete({ _id: id });
    if (!info) {
        return res.status(404).json({ error: 'No such test' })
    }
    res.status(200).json(info)
}

const updateWebInfo = async (req, res) => {
    const { id } = req.params;
    const info = await webInfo.findByIdAndUpdate(
        { _id: id },
        { ...req.body }
    )
    if (!info) {
        return res.status(404).json({ error: 'No such test' })
    }
    res.status(200).json(info)
}

module.exports = {
    getWebInfo,
    createWebInfo,
    deleteWebInfo,
    updateWebInfo
}