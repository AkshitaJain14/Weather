document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button');

    button.addEventListener('click', function() {
        var inputValue = document.querySelector('.inputValue');
        var name = document.querySelector('.name');
        var desc = document.querySelector('.desc');
        var temp = document.querySelector('.temp');

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=3237ead1f6a2ca35d222c8775b3d89bc')
            .then(response => response.json())
            .then(data => {
                // Update DOM with weather data
                name.textContent = data.name;
                desc.textContent = data.weather[0].description;
                temp.textContent = Math.round(data.main.temp - 273.15) + "°C"; // Convert temperature to Celsius
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching weather data:', error);
                name.textContent = 'Error';
                desc.textContent = '';
                temp.textContent = '';
            });
    });
});

