import { useState } from "react"
import { useTripsContext } from '../hooks/useTripsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const TripForm = () => {
    const { dispatch } = useTripsContext()
    const { user } = useAuthContext()

    const [transport, setTransport] = useState('')
    const [distance, setDistance] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const trip = {transport, distance}

        const response = await fetch('/api/trip/', {
            method: 'POST',
            body: JSON.stringify(trip),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTransport('')
            setDistance('')
            setError(null)
            setEmptyFields([])
            console.log('new trip added', json)
            dispatch({type: 'CREATE_TRIP', payload: json})
        }
    }
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Trip</h3>

            <label>Type of Transportation:</label>
            <input 
                type="text"
                onChange={(e) => setTransport(e.target.value)}
                value={transport}
                className={emptyFields.includes('transport') ? 'error' : ''}
            />

            <label>Distance Traveled (in miles): </label>
            <input 
                type="text"
                onChange={(e) => setDistance(e.target.value)}
                value={distance}
                className={emptyFields.includes('distance') ? 'error' : ''}
            />

            <button>Add Trip</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default TripForm;