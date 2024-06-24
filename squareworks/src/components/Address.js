import { useRef, useState, useEffect } from "react";
const addressFields = {address:"",city:"",state:"",zip:""};

const Address = () => {
    const addressRef = useRef();
    const [addressFields, setAddressFields] = useState({address:"",city:"",state:"",zip:""});
    const [validMatch, setValidMatch] = useState(false);

    useEffect(() => {
        addressRef.current.focus();
    },[]);

    // useEffect(() => {
    //     console.log(addressFields);
    // },[addressFields]);


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
    return (
        <section>
            <h1>Enter Address</h1>
            <form>
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
            </form>
        </section>
    );

}

export default Address;