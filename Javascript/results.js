document.addEventListener('Get the longitude and latitude from the URL info.', () => {
    console.log('DOM information was loaded');

    
    const urlParams = new URLSearchParams(window.location.search);
    const latitude = urlParams.get('lat');
    const longitude = urlParams.get('lng');

    if (latitude && longitude) {
        console.log('Given are the latitude and longitude:', latitude, longitude);
        getSunriseSunset(parseFloat(latitude), parseFloat(longitude));
    } else {
        console.error('Not able to find latitude and longitude');
    }
});

async function getSunriseSunset(latitude, longitude) {
    console.log('Getting info on morning and sunset...');

    const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log('API response:', data);

        document.getElementById('sunrise').innerText = `Sunrise: ${data.results.sunrise}`;
        document.getElementById('sunset').innerText = `Sunset: ${data.results.sunset}`;
        document.getElementById('raw-output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error getting info on sunrise and sunset:', error);
    }
}