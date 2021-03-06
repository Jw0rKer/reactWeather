//http://api.apixu.com/v1/search.json?key=fe997f6fd71a4952ad4114510182510&q=lond
var search =[
    {
        "id": 2801268,
        "name": "London, City of London, Greater London, United Kingdom",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "url": "london-city-of-london-greater-london-united-kingdom"
    },
    {
        "id": 2796590,
        "name": "Holborn, Camden, Greater London, United Kingdom",
        "region": "Camden, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.12,
        "url": "holborn-camden-greater-london-united-kingdom"
    },
    {
        "id": 2812957,
        "name": "St Giles, Camden, Greater London, United Kingdom",
        "region": "Camden, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.12,
        "url": "st-giles-camden-greater-london-united-kingdom"
    },
    {
        "id": 2791655,
        "name": "Finsbury, Islington, Greater London, United Kingdom",
        "region": "Islington, Greater London",
        "country": "United Kingdom",
        "lat": 51.53,
        "lon": -0.11,
        "url": "finsbury-islington-greater-london-united-kingdom"
    },
    {
        "id": 2786308,
        "name": "Clerkenwell, Islington, Greater London, United Kingdom",
        "region": "Islington, Greater London",
        "country": "United Kingdom",
        "lat": 51.53,
        "lon": -0.11,
        "url": "clerkenwell-islington-greater-london-united-kingdom"
    },
    {
        "id": 2781746,
        "name": "Bloomsbury, Camden, Greater London, United Kingdom",
        "region": "Camden, Greater London",
        "country": "United Kingdom",
        "lat": 51.53,
        "lon": -0.12,
        "url": "bloomsbury-camden-greater-london-united-kingdom"
    },
    {
        "id": 2813087,
        "name": "St Pancras, Camden, Greater London, United Kingdom",
        "region": "Camden, Greater London",
        "country": "United Kingdom",
        "lat": 51.53,
        "lon": -0.12,
        "url": "st-pancras-camden-greater-london-united-kingdom"
    },
    {
        "id": 2813948,
        "name": "Strand, Westminster, Greater London, United Kingdom",
        "region": "Westminster, Greater London",
        "country": "United Kingdom",
        "lat": 51.51,
        "lon": -0.12,
        "url": "strand-westminster-greater-london-united-kingdom"
    },
    {
        "id": 2811665,
        "name": "Shoreditch, Hackney, Greater London, United Kingdom",
        "region": "Hackney, Greater London",
        "country": "United Kingdom",
        "lat": 51.53,
        "lon": -0.09,
        "url": "shoreditch-hackney-greater-london-united-kingdom"
    },
    {
        "id": 2813028,
        "name": "St Luke's, Islington, Greater London, United Kingdom",
        "region": "Islington, Greater London",
        "country": "United Kingdom",
        "lat": 51.53,
        "lon": -0.09,
        "url": "st-lukes-islington-greater-london-united-kingdom"
    }
]

//https://samples.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=b6907d289e10d714a6e88b30761fae22
var current = {
    "cnt": 3,
    "list": [{
        "coord": {"lon": 37.62, "lat": 55.75},
        "sys": {"type": 1, "id": 7323, "message": 0.0036, "country": "RU", "sunrise": 1485753940, "sunset": 1485784855},
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "main": {"temp": -10.5, "pressure": 1028, "humidity": 66, "temp_min": -11, "temp_max": -10},
        "visibility": 10000,
        "wind": {"speed": 5, "deg": 200},
        "clouds": {"all": 0},
        "dt": 1485793175,
        "id": 524901,
        "name": "Moscow"
    }, {
        "coord": {"lon": 30.52, "lat": 50.45},
        "sys": {"type": 1, "id": 7358, "message": 0.0268, "country": "UA", "sunrise": 1485754480, "sunset": 1485787716},
        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
        "main": {"temp": -11.04, "pressure": 1033, "humidity": 61, "temp_min": -15, "temp_max": -9},
        "visibility": 10000,
        "wind": {"speed": 3, "deg": 150},
        "clouds": {"all": 0},
        "dt": 1485793175,
        "id": 703448,
        "name": "Kiev"
    }, {
        "coord": {"lon": -0.13, "lat": 51.51},
        "sys": {"type": 1, "id": 5091, "message": 0.0034, "country": "GB", "sunrise": 1485762036, "sunset": 1485794875},
        "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}, {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",
            "icon": "09d"
        }],
        "main": {"temp": 7, "pressure": 1012, "humidity": 81, "temp_min": 5, "temp_max": 8},
        "visibility": 10000,
        "wind": {"speed": 4.6, "deg": 90},
        "clouds": {"all": 90},
        "dt": 1485793175,
        "id": 2643743,
        "name": "London"
    }]
}


module.exports = function (app) {
    app.get('/current/:id', (req, res) => {
        res.json(current.list[0]);
    });

    app.get('/search/:keyword',(req,res)=>{
        res.json(search);
    })

}
