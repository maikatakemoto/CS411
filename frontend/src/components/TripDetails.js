import { useTripsContext } from '../hooks/useTripsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const TripDetails = ({ trip }) => {

    const { dispatch } = useTripsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {

        if (!user) {
            return
        }

        const response = await fetch('/api/trip/' + trip._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_TRIP', payload: json})
        }
    }
    return (
        <div className="trip-details">
            <h4>{trip.transport}</h4>
            <p><strong>Distance (miles): </strong> {trip.distance} </p>
            <p>{trip.createdAt}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TripDetails;