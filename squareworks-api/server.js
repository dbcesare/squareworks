import express from "express";
import config from "./common/config/env.config.js";
import { routeConfig } from "./routes/routes.config.js";
// App setup
const app = express();


// Routes setup
routeConfig(app);

// Middlewear
app.use(express.json());

/**
 * just a little coors handling
 */
app.use((req,res,next) => {
    let method = req.method;
    let origin = req.headers.origin;
    let whitelist = [
        'http://localhost'
    ];

    if(!origin && (method == 'GET' || method == 'OPTIONS')) {
        origin='*';
    }else if(whitelist.indexOf(origin) === -1) {
        msg = `Unexpected origin ${origin}`;
        res.status(400).send({
            status:400,
            message:msg
        });
    }

    /**
     * come back to this when integrating FE&BE
     */
    res.setHeader('Access-Control-Allow-Origin',origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});



app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: 'Not Found'
    });
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      status: error.status || 500,
      message: error.message || 'Internal Server Error'
    } );
  });

  var server = app.listen(config.port, () => console.log(`Running on port: ${config.port}`));