async function fetchMemberData() {
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching member data:', error);
      return [];
    }
  }
  
  function displayMembers(members) {
    const container = document.getElementById('members-container');
  
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
  
      card.innerHTML = `
        <h2>${member.name}</h2>
        <figure>
          <img src="${member.icon}" alt="${member.name} Icon">
        </figure>
        <address>${member.address}</address>
        <p>${member.description}</p>
        <button>Learn More</button>
      `;
  
      container.appendChild(card);
    });
  }
  
  async function initialize() {
    const members = await fetchMemberData();
    displayMembers(members);
  }
  
  initialize();


  // Function to display the appropriate visit message
function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const messageArea = document.getElementById('visit-message'); // Get the message area element
  
    if (!lastVisit) { // First visit
      messageArea.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const lastVisitDate = new Date(lastVisit);
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - lastVisitDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      if (daysDifference < 1) { // Less than a day
        messageArea.textContent = "Back so soon! Awesome!";
      } else if (daysDifference === 1) { // 1 day
        messageArea.textContent = "You last visited 1 day ago.";
      } else { // More than 1 day
        messageArea.textContent = `You last visited ${daysDifference} days ago.`;
      }
    }
  
    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', new Date().toString());
  }
  
  // Call the function when the page loads
  window.addEventListener('DOMContentLoaded', displayVisitMessage);