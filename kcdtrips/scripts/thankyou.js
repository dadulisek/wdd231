const storedName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');
        const storedMessage = localStorage.getItem('message');
        const storedSubscribe = localStorage.getItem('subscribe');
        const storedTripType = localStorage.getItem('tripType');
        const storedRegions = JSON.parse(localStorage.getItem('regions')); // Retrieve JSON and parse

        document.getElementById('display-name').textContent = storedName || "Not Available";
        document.getElementById('display-email').textContent = storedEmail || "Not Available";
        document.getElementById('display-message').textContent = storedMessage || "Not Available";
        document.getElementById('display-subscribe').textContent = storedSubscribe === 'true' ? "Yes" : "No" || "Not Available"; // Convert string to boolean
        document.getElementById('display-trip-type').textContent = storedTripType || "Not Available";
        document.getElementById('display-regions').textContent = storedRegions ? storedRegions.join(', ') : "Not Available"; // Join array for display
