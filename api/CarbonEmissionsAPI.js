const apiKey = 'Nmg24Rr0pZ6Es2Zx5FYzJA'

// Function to fetch vehicle makes from Carbon Interface API
async function fetchVehicleModels(makeName) {
    const makeUrl = `https://www.carboninterface.com/api/v1/vehicle_makes`;
    const modelUrl = `https://www.carboninterface.com/api/v1/vehicle_makes/:${makeName}/vehicle_models`;

    try {
        const response = await fetch(makeUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch vehicle makes');
        }

        const data = await response.json();
        console.log('Vehicle makes:', data);

        // Find the make by name
        const make = data?.data.find(make => make.name.toLowerCase() === makeName.toLowerCase());
        if (!make) {
            throw new Error(`Vehicle make '${makeName}' not found`);
        }

        const makeId = make.id;

        // Fetch vehicle models for the specified make
        const modelResponse = await fetch(`${modelUrl}/${makeId}/vehicle_models`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        });

        if (!modelResponse.ok) {
            throw new Error('Failed to fetch vehicle models');
        }

        const modelsData = await modelResponse.json();
        console.log('Vehicle models:', modelsData);

        // Return the models data
        return modelsData.data;
    } catch (error) {
        console.error('Error fetching vehicle models:', error.message);
        return null;
    }
}

// Function to calculate distance using Google Maps Distance Matrix API
function calculateDistance(origin, destination) {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: [destination],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
        },
        async function (response, status) {
            if (status === 'OK') {
                var distance = response.rows[0].elements[0].distance.value; // Distance in meters
                var distanceKm = distance / 1000; // Convert distance to kilometers

                try {
                    // Fetch vehicle models for the desired make 
                    const vehicleModels = await fetchVehicleModels('vehical_make');
                    if (!vehicleModels || vehicleModels.length === 0) {
                        throw new Error('No vehicle models found');
                    }

                    // Assuming 'bus' is the desired vehicle type
                    const busModel = vehicleModels.find(model => model.name.toLowerCase() === 'bus');
                    if (!busModel) {
                        throw new Error('Bus model not found');
                    }

                    const vehicleModelId = busModel.id;

                    // Call function to estimate carbon emissions
                    estimateCarbonEmissions(vehicleModelId, 'km', distanceKm);
                } catch (error) {
                    console.error('Error:', error.message);
                }
            } else {
                console.error('Error with Distance Matrix service:', status);
            }
        }
    );
}

// Function to estimate carbon emissions using Carbon Interface API
async function estimateCarbonEmissions(vehicleModelId, distanceUnit, distanceValue) {
    const apiUrl = 'https://www.carboninterface.com/api/v1/estimates';

    const payload = {
        type: 'vehicle',
        distance_unit: distanceUnit,
        distance_value: distanceValue,
        vehicle_model_id: vehicleModelId,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch carbon emissions estimate');
        }

        const data = await response.json();
        console.log('Carbon emissions estimate:', data);

        // Process the response (e.g., display carbon emissions)
        const carbonEmissions = data?.data?.attributes?.carbon_kg; // Carbon emissions in kilograms
        console.log(`Estimated carbon emissions: ${carbonEmissions} kg`);

        // Display carbon emissions or perform further actions
        displayCarbonEmissions(carbonEmissions);
    } catch (error) {
        console.error('Error fetching carbon emissions estimate:', error.message);
    }
}

// Function to display carbon emissions (example implementation)
function displayCarbonEmissions(carbonEmissions) {
    // Example: Display carbon emissions in the UI
    document.getElementById('carbonEmissions').textContent = `Estimated carbon emissions: ${carbonEmissions} kg`;
}

// Event listener for form submission (calculate button)
document.querySelector('.form-horizontal').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get origin and destination input values
    const origin = document.getElementById('from').value;
    const destination = document.getElementById('to').value;

    // Calculate distance between origin and destination
    calculateDistance(origin, destination);
});