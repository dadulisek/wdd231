async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    return members;
  }

  // function createMemberCard(member) {
  //   return `
  //     <div class="card">
  //       <img src="${member.icon}" alt="${member.name}" width="100px" height="auto" loading="lazy">
  //       <h3>${member.name}</h3>
  //       <p>${member.address}</p>
  //       <p>${member.phone}</p>
  //       <a href="https://${member.website}" target="_blank">${member.website}</a>
  //     </div>
  //   `;
  // }

  // async function displayMembers(view) {
  //   const membersContainer = document.getElementById('members');
  //   membersContainer.className = `container ${view}-view`;

  //   const members = await fetchMembers();
  //   membersContainer.innerHTML = members.map(createMemberCard).join('');
  // }

  function createMemberCard(member, view) {
    if (view === 'grid') {
        return `
          <div class="card">
            <img src="${member.icon}" alt="${member.name}" width="100px" height="60px" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="https://${member.website}" target="_blank">${member.website}</a>
          </div>
        `;
    } else { // List view
        return `
          <div class="list-item">
            <span class="name">${member.name}</span>
            <span class="address">${member.address}</span>
            <span class="phone">${member.phone}</span>
            <a href="https://${member.website}" target="_blank">${member.website}</a>
          </div>
        `;
    }
}

async function displayMembers(view) {
    const membersContainer = document.getElementById('members');
    membersContainer.className = `container ${view}-view`;

    const members = await fetchMembers();
    membersContainer.innerHTML = members.map(member => createMemberCard(member, view)).join('');
}

  document.getElementById('gridView').addEventListener('click', () => displayMembers('grid'));
  document.getElementById('listView').addEventListener('click', () => displayMembers('list'));

  // Initial display
  displayMembers('grid');

// Home page
  function createMemberCard(member) {
    return `
      <div class="card">
        <img src="${member.icon}" alt="${member.name}" width="100px" height="60px" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="https://${member.website}" target="_blank">${member.website}</a>
      </div>
    `;
}

async function displayFeaturedMembers() {
    const homeScreenContainer = document.getElementById('home-screen'); 
    homeScreenContainer.className = "container grid-view"; // Ensure it's in grid view

    const members = await fetchMembers();
    const featuredMembers = members.slice(0, 3); // Get only the first 3 members

    homeScreenContainer.innerHTML = featuredMembers.map(member => createMemberCard(member)).join('');
}

// Call function to display featured members immediately
displayFeaturedMembers();