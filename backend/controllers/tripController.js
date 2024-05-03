import tripModel from "../models/tripModel.js"
import mongoose from 'mongoose'

// get all trips

export const getTrips = async (req, res) => {
    const user_id = req.user._id

    const trips = await tripModel.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(trips)
}


// get a single trip
export const getTrip = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such trip'})
    }

    const trip = await tripModel.findById(id)

    if (!trip) {
        return res.status(404).json({error: 'No such trip'})
    }

    res.status(200).json(trip)
}


// create a new trip
export const createTrip = async (req, res) => {
    const { transport, distance } = req.body;

    let emptyFields = []

    if (!transport) {
        emptyFields.push('transport')
    }
    if(!distance) {
        emptyFields.push('distance')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to DB
    try {
        const user_id = req.user._id
        const trip = await tripModel.create({ transport, distance, user_id });
        res.status(200).json(trip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// delete a trip

export const deleteTrip = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such trip'})
    }
    // find the document where _id is equal to the id for given trip
    const trip = await tripModel.findOneAndDelete({_id: id})

    if (!trip) {
        return res.status(404).json({error: 'No such trip'})
    }

    res.status(200).json(trip)


}

// update a trip

export const updateTrip = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such trip'})
    }

    const trip = await tripModel.findOneAndUpdate({_id: id}, {
        ...req.body // updates the objects
    })

    if (!trip) {
        return res.status(404).json({error: 'No such trip'})
    }

    res.status(200).json(trip)
}
