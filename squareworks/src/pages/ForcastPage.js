import { useLocation } from "react-router-dom";
import Forcast from "../components/Forcast";


function ForcastPage() {
    const location = useLocation();
    const weatherData = location.state;
    console.log("state",weatherData);
    
    return (
        <main className="ForcastPage">
            <Forcast {...weatherData} />
        </main>
    )
}
export default ForcastPage;