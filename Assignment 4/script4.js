// Sample Data
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const temperatureData = [30, 32, 31, 29, 28, 27, 30];
const humidityData = [60, 65, 70, 75, 80, 78, 72];
const rainData = [5, 10, 0, 20, 15, 25, 10];

// Temperature Chart
new Chart(document.getElementById("tempChart"), {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Temperature",
            data: temperatureData,
            borderWidth: 2
        }]
    }
});

// Humidity Chart
new Chart(document.getElementById("humidityChart"), {
    type: "bar",
    data: {
        labels: labels,
        datasets: [{
            label: "Humidity",
            data: humidityData,
            borderWidth: 2
        }]
    }
});

// Rainfall Chart
new Chart(document.getElementById("rainChart"), {
    type: "pie",
    data: {
        labels: labels,
        datasets: [{
            label: "Rainfall",
            data: rainData
        }]
    }
});