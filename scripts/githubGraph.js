import { Octokit } from "https://esm.sh/octokit";
let squares = document.querySelector('.squares');
const username = 'DAlsabrook';
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

document.addEventListener('DOMContentLoaded', function () {
  const userInfoDiv = document.getElementById('user-info');
  getUserData(username);
  getGitHubContributions();

  async function getUserData(username) {
    try {
      const octokit = new Octokit({ auth: `` });
      const { data } = await octokit.rest.users.getByUsername({ username });
      const datesegments = data.created_at.split('T').shift().split('-');
      userInfoDiv.innerHTML = `
        <div class="profile-info-wrapper">
          <a href="${data.html_url}" target="_blank" rel="noopener noreferrer" id="user">@${data.login}</a>
          <p id="date">Joined: ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}</p>
          <div class="profile-stat">
            <p class="stat-title">Public Repos:</p>
            <p id="repos" class="stat-value">${data.public_repos}</p>
          </div>
        </div>
      `;
    } catch (error) {
      userInfoDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }

  async function getGitHubContributions() {
    try {
      const userContDiv = document.getElementById('user-contribution');

      const response = await fetch('https://portfolio-worker.dfalsabrook.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      const weeks = responseData.data.user.contributionsCollection.contributionCalendar.weeks;
      let ucount = 0;

      weeks.forEach(week => {
        week.contributionDays.forEach(day => {
          const contributionCount = day.contributionCount;
          const square = document.createElement('li');
          square.dataset.level = contributionCount;
          const greenIntensity = Math.min(255, contributionCount * 25); // Adjust multiplier as needed
          square.style.backgroundColor = `rgb(0, ${greenIntensity}, 0)`;

          squares.appendChild(square);
          ucount += contributionCount;
        });
      });

      userContDiv.innerHTML = `
        <span>${ucount} contributions in the last year</span>
        <a href="https://github.com/${username}" id="user-href" target="_blank"></a>
      `;
    } catch (error) {
      console.error('Error loading contributions data:', error);
    }
  }

  // JavaScript code to scroll the container to the right on page load
  window.addEventListener('load', function () {
    const container = document.querySelector('.graph.ContributionCalendar-label');
    if (container) {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns a zero-based index

      // Define the scroll percentage for each month
      const scrollPositions = {
        1: 0, // January
        2: 0, // February
        3: 0, // March
        4: 0, // April
        5: 0, // May
        6: 30, // June
        7: 30, // July
        8: 40, // August
        9: 40, // September
        10: 40, // October
        11: 45, // November
        12: 100, // December
      };

      const scrollPercentage = scrollPositions[currentMonth];

      if (scrollPercentage !== undefined) {
        // Scroll to the specified percentage of the container's width
        container.scrollLeft = (container.scrollWidth * scrollPercentage) / 100;
      }
    }
  });
});
