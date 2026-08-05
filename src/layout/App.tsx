import Header from "./header";
import Container from "./container";
import Footer from "./footer";
import Nav from "./nav";
import Aside from "./aside";


const App = () => {
    return (
        <div className='app'>
            <Header />
            <Nav />
            <Aside />
            <Container>
                <></>
            </Container>
            <Footer />
        </div>
    );
};

export default App;
