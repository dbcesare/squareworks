import config from "../common/config/env.config.js";
// test route
import {router as routes} from "./api.route.js";
import WeatherRoutes from "./weather.route.js";

export function routeConfig(app) {
    let base = config.api.route
    app.use(base,routes);
    app.use(base+config.api.weather.route,WeatherRoutes);

    app.get(base + '/ping', (req,res) => {
        res.send({
            "running":true
        });
    });
}