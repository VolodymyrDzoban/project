import { Banner } from "./Banner/Banner";
import { Contacts } from "./Contacts/Contacts";
import { Info } from "./Info/Info";


const Golovna = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Contacts />
        </div>
    );
}

export { Golovna };