const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const subscribe = document.getElementById('subscribe').checked;
            const tripType = document.querySelector('input[name="trip_type"]:checked').value;
            const regions = Array.from(document.querySelectorAll('input[name="region[]"]:checked'))
                .map(checkbox => checkbox.value);


            if (email.includes('@')) {
                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('message', message);
                localStorage.setItem('subscribe', subscribe);
                localStorage.setItem('tripType', tripType);
                localStorage.setItem('regions', JSON.stringify(regions)); // Store array as JSON

                window.location.href = 'thankyou.html'; 
            } else {
                alert('Please enter a valid email address.');
            }
        });