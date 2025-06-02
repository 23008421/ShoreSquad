// ShoreSquad App JS
// Features: Map, Weather, Social Join Button

document.addEventListener('DOMContentLoaded', () => {
  // Placeholder: Weather API integration
  const weatherDiv = document.getElementById('weather');
  weatherDiv.textContent = 'Weather data will appear here.';

  // Social Join Button
  const joinBtn = document.getElementById('join-btn');
  joinBtn.addEventListener('click', () => {
    joinBtn.textContent = 'Joined! See you at the beach!';
    joinBtn.disabled = true;
    joinBtn.style.background = '#26A69A';
  });
});
