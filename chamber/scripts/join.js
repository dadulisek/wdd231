 // Get current timestamp
 const timestampField = document.getElementById('timestamp');
 timestampField.value = new Date().toISOString();

 // Modal functionality
 const openModal = (modalId) => {
     document.getElementById(modalId).style.display = 'block';
 };

 const closeModal = () => {
     document.querySelectorAll('.modal').forEach(modal => {
         modal.style.display = 'none';
     });
 };

 document.querySelectorAll('.membership-card a').forEach(link => {
     link.addEventListener('click', (event) => {
         event.preventDefault(); // Prevent default link behavior
         openModal(link.getAttribute('data-modal-id'));
     });
 });

 document.querySelectorAll('.close').forEach(closeBtn => {
     closeBtn.addEventListener('click', closeModal);
 });

 // Form submission handling (example)
 const membershipForm = document.getElementById('membershipForm');

 membershipForm.addEventListener('submit', (event) => {
     event.preventDefault(); 
 
     // Get form data
     const firstName = document.getElementById('firstName').value;
     const lastName = document.getElementById('lastName').value;
     const email = document.getElementById('email').value;
     const phone = document.getElementById('phone').value;
     const organization = document.getElementById('organization').value;
     const timestamp = document.getElementById('timestamp').value;
 
     // Create a URL with query parameters
     const thankYouUrl = `thankyou.html?firstName=${firstName}&lastName=${lastName}&email=${email}&phone=${phone}&organization=${organization}&timestamp=${timestamp}`;
 
     // Redirect to the thank you page
     window.location.href = thankYouUrl;
 });

  // Add class to trigger animation
  const membershipCards = document.querySelector('.membership-cards');
  membershipCards.classList.add('active');