
import { InputProvider } from "../../InputContext/InputContext";
import DemoCarousel from "../Crousel/DemoCarousel";
import Header from "../Header/Header";




function Hoc(WrappedComponent) {
    return function() {
        return (
            <div>
               <InputProvider>
                <Header />
                <DemoCarousel />
                {/* Agar props nahi hain, toh bhi WrappedComponent ko bina props ke render kar sakte ho */}
                <WrappedComponent />
                
                <footer>footer</footer>
                </InputProvider>
            </div>
        );
    };
}

export default Hoc;
