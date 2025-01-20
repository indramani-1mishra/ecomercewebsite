import Header from "../Header/Header";



function Hoc(WrappedComponent) {
    return function() {
        return (
            <div>
              
                <Header />
                {/* Agar props nahi hain, toh bhi WrappedComponent ko bina props ke render kar sakte ho */}
                <WrappedComponent />
                
                <footer>footer</footer>
            </div>
        );
    };
}

export default Hoc;
