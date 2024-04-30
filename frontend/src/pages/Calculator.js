const Calculator = () => {
    return (
        <div class="calculator-intro">
            <div>
                <h2>Carbon Footprint Calculator</h2>
                    <h3>Enter your travel details to estimate your carbon footprint.</h3>
            </div>
            <div>
                <h2>Map</h2>
                    <h3>Use the map below to select your start and end points.</h3>
            </div>
            <div>
                <h2>Choose your transportation mode</h2>
                    <select id="mode">
                        <option value="car">Car</option>
                        <option value="public">Public Transit</option>
                    </select>
            </div>
            <div>
                <h2>Consider the following suggestions to reduce your impact:</h2>
                <ul>
                    <h3>Use public transportation more frequently.</h3>
                    <h3>Consider walking or biking for close journeys.</h3>
                    <h3>Consider carpooling with your friends or co-workers.</h3>
                    <h3>Drive a low-carbon vehicle such as Electric vehicles.</h3>
                </ul>
            </div>
        </div>
    )
}

export default Calculator;