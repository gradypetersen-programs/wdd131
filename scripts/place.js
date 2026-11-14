function calculateWindChill(airTemperature, windSpeed) {
    return 35.74 + 0.6215 * airTemperature - 35.75 * windSpeed ** 0.16 + 0.4275 * airTemperature * windSpeed ** 0.16;
}
let airTemperature = 50;
let windSpeed = 8;
const windChillFactor = document.getElementById("wind-chill")
if (airTemperature <= 50 && windSpeed > 3) {
    windChillFactor.textContent = `${calculateWindChill(airTemperature, windSpeed).toFixed(2)} °F`
} else {
    windChillFactor.textContent = "N/A"
}

