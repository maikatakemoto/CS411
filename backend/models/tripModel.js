import mongoose from "mongoose"

const TripSchema = new mongoose.Schema({
    transport: {
        type: String,
        required: true
    },
    distance: {
        type: Number, 
        required: true
    }
})

const tripModel = mongoose.model("trips", TripSchema)
export default tripModel