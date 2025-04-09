const apiAdress = document.getElementById("inputSearch");
const submitBtn = document.getElementById("submit");
const ispH2 = document.getElementById("isp");
const regionH2 = document.getElementById("region");
const spanTimezone = document.getElementById("timezone");
const ipH2 = document.getElementById("ip");

const map = L.map("map");

map.setView([48.8566, 2.3522], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

submitBtn.addEventListener("click", async () => {
	const res = await fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=at_4gjLR0afIAWlS89FQwXQjCmuLl4QK&ipAddress=${apiAdress.value}`
	);
	const data = await res.json();

	console.log(data);
	ispH2.textContent = data.isp;
	regionH2.textContent = data.location.region;
	spanTimezone.textContent = data.location.timezone;
	ipH2.textContent = data.ip;

	L.marker([data.location.lat, data.location.lng]).addTo(map);
	map.setView([data.location.lat, data.location.lng]);
});
