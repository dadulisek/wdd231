async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    return members;
  }

  function createMemberCard(member) {
    return `
      <div class="card">
        <img src="${member.icon}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="https://${member.website}" target="_blank">${member.website}</a>
      </div>
    `;
  }

  async function displayMembers(view) {
    const membersContainer = document.getElementById('members');
    membersContainer.className = `container ${view}-view`;

    const members = await fetchMembers();
    membersContainer.innerHTML = members.map(createMemberCard).join('');
  }

  document.getElementById('gridView').addEventListener('click', () => displayMembers('grid'));
  document.getElementById('listView').addEventListener('click', () => displayMembers('list'));

  // Initial display
  displayMembers('grid');