const Home = () => {
    return (
        <section class="hero">
            <div class="container">
                <h2>Measure Your Carbon Footprint</h2>
                <p>Welcome to our Carbon Footprint Calculator! Calculate your carbon emissions for your daily journeys and find ways to reduce your impact on the environment.</p>
                <a href="/calculator" class="btn">Start Calculating</a>
            </div>
            <div class="container">
                <h2>Key Features</h2>
                <ul>
                    <li>Calculate carbon footprint based on transportation mode.</li>
                    <li>Get tips for reducing your carbon footprint.</li>
                </ul>
            </div>
            <div class="container">
                <h2>Resources</h2>
                <p>Explore articles, videos, and tools to help you reduce your carbon footprint:</p>
            </div>
            <div>
                <h2>Your Estimated Carbon Footprint</h2>
                <p>Please see your calculated Carbon emission.</p>
            </div>
        </section>

    )
}

export default Home;