import { useEffect } from 'react'
import { useTripsContext } from '../hooks/useTripsContext'

// components
import TripDetails from '../components/TripDetails'
import TripForm from '../components/TripForm'

const Trips = () => {

    const {trips, dispatch} = useTripsContext()

    useEffect(() => {
        const fetchTrips = async () => {
            const response = await fetch("/api/trip/")
            // need to do json because we are fetching data from tripController in the form of json
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_TRIPS', payload: json})
            }
        }

        fetchTrips()
    }, [dispatch])

    

    return (
        // need a valid trip list before being able to map it
        <div className="home">
            <div className="trips">
                
                {trips && trips.map((trip) => (
                    <TripDetails key={trip._id} trip = {trip} />
                ))}

            </div>
            <TripForm />
        </div>
    )
}

export default Trips;

