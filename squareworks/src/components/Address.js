import { useRef, useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
const addressFields = {address:"",city:"",state:"",zip:""};

const Address = () => {
    const navigate = useNavigate();
    const addressRef = useRef();
    const [addressFields, setAddressFields] = useState({address:"",city:"",state:"",zip:""});
    const [validMatch, setValidMatch] = useState(false);

    useEffect(() => {
        addressRef.current.focus();
    },[]);


    const handleChange = (l,e) => {
        let nv = {};
        nv[l] = e.target.value;
        setAddressFields(addressFields => ({
            ...addressFields,
            ...nv
        }));
        if(addressFields.zip.match("\d{5}(?:[-\s]\d{4})?")){
            setValidMatch(true);
        }
        console.log(addressFields);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Parse address fields and hit backend
        // fetch("http://localhost:3600/sw-api/address");

        // What the response will be looking like
        const obj = {
            "current": {
                "time": "2024-06-24T00:15",
                "interval": 900,
                "temperature_2m": 71.0,
                "precipitation": 0.000,
                "weather_code": 3
            },
            "forcasts": [
                {
                    date:"2023-06-23",
                    weatherCode: 65,
                    minTemp: "63.4",
                    maxTemp: "76.0"
                },
                {
                    date:"2023-06-24",
                    weatherCode: 3,
                    minTemp: "65.7",
                    maxTemp: "77.9"
                },
                {
                    date:"2023-06-25",
                    weatherCode: 51,
                    minTemp: "40",
                    maxTemp: "80.9"
                }
            ]
        };

        //with a successfull response, redirect to the page to display the weather forcast.
        navigate("/forcast",{state:{...obj}});
    }

    return (
        <section>
            <h1>Enter Address</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    ref={addressRef}
                    value={addressFields.address}
                    onChange={(e) => handleChange("address",e)}
                />

                <label htmlFor="city">city</label>
                <input
                    type="text"
                    id="city"
                    ref={addressRef}
                    value={addressFields.city}
                    onChange={(e) => handleChange("city",e)}
                />

                <label htmlFor="state">state</label>
                <input
                    type="text"
                    id="state"
                    ref={addressRef}
                    value={addressFields.state}
                    onChange={(e) => handleChange("state",e)}
                />

                <label htmlFor="zip">zip</label>
                <input
                    type="text"
                    id="zip"
                    aria-invalid={validMatch}
                    ref={addressRef}
                    value={addressFields.zip}
                    onChange={(e) => handleChange("zip",e)}
                />
                <input type="submit" />
            </form>
        </section>
    );

}

export default Address;