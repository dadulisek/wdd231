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