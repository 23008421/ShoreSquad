// ShoreSquad App JS
// Features: Map, Weather, Social Join Button

document.addEventListener('DOMContentLoaded', () => {
  // Fetch and display 4-day weather forecast from NEA
  const weatherLoading = document.getElementById('weather-loading');
  const weatherForecast = document.getElementById('weather-forecast');

  fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
    .then(response => response.json())
    .then(data => {
      const items = data.items && data.items[0] && data.items[0].forecasts ? data.items[0].forecasts : [];
      if (items.length === 0) {
        weatherLoading.textContent = 'No forecast data available.';
        return;
      }
      let html = '<div class="forecast-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem;">';
      items.forEach(day => {
        // Choose a simple icon based on forecast keywords
        let icon = '';
        const forecast = day.forecast.toLowerCase();
        if (forecast.includes('thunder')) {
          icon = '⛈️';
        } else if (forecast.includes('rain')) {
          icon = '🌧️';
        } else if (forecast.includes('cloud')) {
          icon = '⛅';
        } else if (forecast.includes('fair') || forecast.includes('sun')) {
          icon = '☀️';
        } else {
          icon = '🌤️';
        }
        html += `<div class="forecast-day" style="background:#E3F2FD;border-radius:8px;padding:1rem;text-align:center;box-shadow:0 2px 8px rgba(33,150,243,0.08);">
          <div style="font-weight:bold;color:#2196F3;font-size:1.1rem;">${day.date}</div>
          <div style="font-size:2.2rem;margin:0.5rem 0;">${icon}</div>
          <div style="margin:0.5rem 0;font-size:1rem;">${day.forecast}</div>
          <div style="color:#FF7043;font-size:1.1rem;">${day.temperature.low}&ndash;${day.temperature.high}&deg;C</div>
          <div style="color:#26A69A;font-size:0.95rem;">Humidity: ${day.relative_humidity.low}&ndash;${day.relative_humidity.high}%</div>
        </div>`;
      });
      html += '</div>';
      weatherForecast.innerHTML = html;
      weatherLoading.style.display = 'none';
      weatherForecast.style.display = 'block';
    })
    .catch(() => {
      weatherLoading.textContent = 'Unable to load weather forecast.';
    });

  // Social Join Button
  const joinBtn = document.getElementById('join-btn');
  joinBtn.addEventListener('click', () => {
    joinBtn.textContent = 'Joined! See you at the beach!';
    joinBtn.disabled = true;
    joinBtn.style.background = '#26A69A';
  });
});
