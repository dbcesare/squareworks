const BASE_URL = "https://api.open-meteo.com";
const FORCAST_ENDPOINT = "/v1/forecast";

const r = 
{
    "latitude": 42.03692,
    "longitude": -70.094574,
    "generationtime_ms": 0.17404556274414062,
    "utc_offset_seconds": -14400,
    "timezone": "America/New_York",
    "timezone_abbreviation": "EDT",
    "elevation": 19.0,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature_2m": "°F",
        "precipitation": "inch",
        "weather_code": "wmo code"
    },
    "current": {
        "time": "2024-06-24T00:15",
        "interval": 900,
        "temperature_2m": 71.0,
        "precipitation": 0.000,
        "weather_code": 3
    },
    "daily_units": {
        "time": "iso8601",
        "weather_code": "wmo code",
        "temperature_2m_max": "°F",
        "temperature_2m_min": "°F"
    },
    "daily": {
        "time": [
            "2024-06-23",
            "2024-06-24"
        ],
        "weather_code": [
            65,
            3
        ],
        "temperature_2m_max": [
            76.0,
            77.9
        ],
        "temperature_2m_min": [
            63.4,
            65.7
        ]
    }
}



class Weather {
    async getWeatherData(longitude,latitude,startDate,endDate) {
        const params = new URLSearchParams();

        // params.append("latitude",`${ latitude }`);
        // params.append("longitude",`${ longitude }`);
        params.append("latitude", latitude);
        params.append("longitude", longitude);
        params.append("current","temperature_2m,precipitation,weather_code")
        params.append("daily","weather_code,temperature_2m_max,temperature_2m_min");
        params.append("timezone","America/New_York");
        params.append("start_date",startDate);
        params.append("end_date",endDate);
        params.append("temperature_unit","fahrenheit");
        params.append("precipitation_unit","inch");

        let url = new URL(BASE_URL+FORCAST_ENDPOINT+"?"+params.toString());
        console.log(`Fetchin L: ${longitude} & Lat: ${latitude}`);
        let result = await fetch(url);
        let jr = await result.json();

        let current = jr.current;
        let daily = []
        for(let i in jr.daily.time){
            daily.push({
                date:jr.daily.time[i],
                weatherCode: jr.daily.weather_code[i],
                minTemp: jr.daily.temperature_2m_min[i],
                maxTemp: jr.daily.temperature_2m_max[i]
            });
        }

        return {
            current:current,
            forcasts: daily
        }

    }
}

export default Weather;