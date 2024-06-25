import envConfig from "../../common/config/env.config.js";
import * as chaiModule from "chai";
import chaiHttp from "chai-http";
const app = 'http://localhost:3600';

const chai = chaiModule.use(chaiHttp);
const {expect} = chai;


describe("Weather Routes",function() {
    describe("get good weather",function() {
        const goodQuery = {
            address:"12 Twine Field Road",
            city:"Truro",
            state:"MA",
            zip:"02666"
        };
        it("get weather", function(done) {
            chai.request.execute(app)
            .get(envConfig.api.route+envConfig.api.weather.route)
            .query(goodQuery)
            .end((err,res) => {
                console.log(res.body);
                expect(res.status).to.equal(200);
                done();
            });
        });
    });

    describe("get bad weather. missing address",function() {
        const badQueryMissingAddress = {
            address:"",
            city:"Truro",
            state:"MA",
            zip:"02666"
        }
        it("get weather", function(done) {
            chai.request.execute(app)
            .get(envConfig.api.route+envConfig.api.weather.route)
            .query(badQueryMissingAddress)
            .end((err,res) => {
                console.log(err);
                expect(res.status).to.equal(400);
                done();
            });
        });
    });
});