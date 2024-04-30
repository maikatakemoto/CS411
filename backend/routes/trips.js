import express from 'express'

import {
    createTrip,
    getTrips,
    getTrip,
    deleteTrip,
    updateTrip
} from '../controllers/tripController.js'

const router = express.Router()

// GET all trips
router.get('/', getTrips)

// GET a single trip
router.get('/', getTrip)

// POST a new trip
router.post('/', createTrip)

// DELETE a trip
router.delete('/:id', deleteTrip)

// UPDATE a new trip
router.patch('/:id', updateTrip)

export default router