import Weather from "../services/weather.service.js";
import Geocode from "../services/geocode.service.js";
const weather = new Weather();
const geocode = new Geocode();


export async function getWeather(req,res) {
    try{
        let {address,city,state,zip} = req.query;
        let {x,y} = await geocode.getCoordinates(address,city,state,zip);
        let weatherResponse = await weather.getWeatherData(x,y,"2024-06-24","2024-06-25");
        console.log("Weather data: ",weatherResponse);
        res.send({
            status:200,
            data:weatherResponse
        });
    }catch(err){
        console.error(err);
        res.send({e:err,message:err.message});
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