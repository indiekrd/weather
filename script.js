fetch('https://api.openweathermap.org/data/2.5/weather?id=542420&appid=6d6f9f476cd25670d631d33e4823ad89')
    .then(function (resp) { return resp.json() })
    .then(function (data){
        console.log(data)
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = `${Math.trunc(data.main.temp - 273)}&deg;`;
    })
    .catch(function () {

    })
