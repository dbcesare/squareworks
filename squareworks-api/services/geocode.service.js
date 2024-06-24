
const BASE_URL = "https://geocoding.geo.census.gov";
const ADDRESS_ENDPOINT = "/geocoder/locations/address";

class Geocode {

    async getCoordinates(address,city,state,zip){
        const params = new URLSearchParams();

        params.append("street", address);
        params.append("city", city);
        params.append("state", state);
        params.append("zip", zip);
        params.append("benchmark","Public_AR_Current")
        params.append("format","json");

        let url = new URL(BASE_URL + ADDRESS_ENDPOINT + "?" + params.toString());
        let result = await fetch(url);
        let jr = await result.json();
        return jr.result.addressMatches[0].coordinates;
    }
}

export default Geocode;