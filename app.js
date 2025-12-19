


async function getWeather(event) {
  event.preventDefault();

  let latitude = document.getElementById("latitude").value;
  let longitude = document.getElementById("longitude").value;

  let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  let response = await fetch(url);
  let data = await response.json();

  document.getElementById("temp").textContent =
  `${data.current_weather.temperature}°C`;
}
