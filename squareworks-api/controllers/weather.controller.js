import Weather from "../services/weather.service.js";
const weather = new Weather();

export async function getWeather(req,res) {
    try{        
        let weatherResponse = await weather.getWeatherData(-70.0938,42.0327,"2024-06-24","2024-06-25");
        console.log("Weather data: ",weatherResponse);
        res.send({
            status:200,
            data:weatherResponse
        });
    }catch(err){
        res.send({e:err,message:"woops"});
    }

}


export async function ping(req,res) {
    try {
        res.send({
            "running":true
        });
    } catch (err) {
        res.send({e:err,message:"woops"});
    }
}