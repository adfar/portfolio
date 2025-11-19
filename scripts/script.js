async function loadRepos() {
    const reposSection = document.getElementById("repos");
    try {
        const response = await fetch("https://api.github.com/users/adfar/repos?sort=updated");
        const data = await response.json();
        const MAX_REPOS = 6;

        const repoGrid = document.createElement("div");
        repoGrid.className = "repo-grid";

        data.slice(0, MAX_REPOS).forEach(repo => {
            const repoCard = document.createElement("div");
            repoCard.className = "repo-card";
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available"}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub ’</a>
            `;
            repoGrid.appendChild(repoCard);
        });

        reposSection.appendChild(repoGrid);
    } catch (error) {
        console.error(error);
        reposSection.innerHTML = "<h2>GitHub</h2><p>Error loading repositories</p>";
    }
}
loadRepos();

function toggleMenu() {
    const links = document.querySelector('.links');
    const hamburger = document.querySelector('.hamburger');
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
}
