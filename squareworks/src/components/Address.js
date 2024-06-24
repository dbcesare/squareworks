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

        // What the response will be looking like

        // Parse address fields and hit backend
        //with a successfull response, redirect to the page to display the weather forcast.
        fetch("http://localhost:3600/sw-api/weather").then(res => {
            res.json().then(body => {
                let data = body.data;
                console.log("FrontEnd rezzy: ",data);
                navigate("/forcast",{state:{...data}});
            });
        });        
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