const Calculator = () => {
    return (
        <section class="calculator-intro">
            <div>
                <h1>Carbon Footprint Calculator</h1>
                <p>Enter your travel details to estimate your carbon footprint.</p>
            </div>
            <div>
                <h2>Map</h2>
                <p>Use the map below to select your start and end points.</p>
                <div id="map"></div>
            </div>
            <div>
                <h2>Choose your transportation mode</h2>
                    <select id="mode">
                        <option value="car">Car</option>
                        <option value="walking">Walking</option>
                        <option value="public">Public Transit</option>
                    </select>
            </div>
            <div>
                <h2>Tips for Reducing your Carbon Footprint</h2>
                    <p>Consider the following suggestions to reduce your impact:</p>
                    <ul>
                        <li>Tip 1: Use public transportation more frequently.</li>
                        <li>Tip 2: Consider walking or biking for close journeys.</li>
                        <li>Tip 3: Consider carpooling with your friends or co-workers.</li>
                        <li>Tip 4: Drive a low-carbon vehicle such as Electric vehicles.</li>
                    </ul>
            </div>
        </section>
    )
}

export default Calculator;