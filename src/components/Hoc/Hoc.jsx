
import { useLocation } from "react-router-dom";
import { InputProvider } from "../../InputContext/InputContext";
import DemoCarousel from "../Crousel/DemoCarousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";




function Hoc(WrappedComponent) {
    return function() {

        const location = useLocation();
        const showcrousel = location.pathname !=='/cart';
        return (
            <div>
               <InputProvider>
                <Header />
                {showcrousel && <DemoCarousel />}
                {/* Agar props nahi hain, toh bhi WrappedComponent ko bina props ke render kar sakte ho */}
                <WrappedComponent />
                
               <Footer />
                </InputProvider>
            </div>
        );
    };
}

export default Hoc;
