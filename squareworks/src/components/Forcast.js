import { useRef, useState, useEffect } from "react";

// A forcast card will have a Date, then a temperature and weather code
const Forcast = (props) => {

    useEffect(() => {
        console.log("props: ",props);
    },[]);
    return (
        <section>
            <div className="forcast-container">
                <h2>Forcast</h2>

                    {props.forcasts.map((fc,index) => (
                        <div key={index} className="weather-container">
                                <div className="weather-info">
                                <h4 className="wc-title">
                                    Date: {fc.date}
                                </h4>
                                <p className="wc-text">
                                    Weather Code: {fc.weatherCode}
                                </p>
                                <p className="wc-text">
                                    Low:{fc.minTemp}
                                </p>
                                <p className="wc-text">
                                    High:{fc.maxTemp}
                                </p>
                                </div>
                        </div>
                    ))}
            </div>

        </section>
    )
}

export default Forcast;