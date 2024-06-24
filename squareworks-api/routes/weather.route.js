import express from "express";

const WeatherRoutes = express.Router();

import {getWeather, ping} from '../controllers/weather.controller.js';

WeatherRoutes.get('/',getWeather);
WeatherRoutes.get('/ping',ping);

export default WeatherRoutes;
