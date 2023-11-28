async function getLocation() {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
  
        const { latitude, longitude } = position.coords;
  
        // Send to the page with the results
        redirectToResults(latitude, longitude);
    } catch (error) {
        console.error('Error getting geolocation:', error);
    }
  }
  
  function redirectToResults(latitude, longitude) {
    // the longitude and latitude to use as URL fields
    const encodedLatitude = encodeURIComponent(latitude);
    const encodedLongitude = encodeURIComponent(longitude);
  
    window.location.href = `results.html?lat=${encodedLatitude}&lng=${encodedLongitude}`;
  }