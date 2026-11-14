function calculateWindChill(airTemperature, windSpeed) {
    return 35.74 + 0.6215 * airTemperature - 35.75 * windSpeed ** 0.16 + 0.4275 * airTemperature * windSpeed ** 0.16;
}

const windChillFactor = document.getElementById("wind-chill")
windChillFactor.textContent = `${calculateWindChill(50, 8).toFixed(2)} °F`
