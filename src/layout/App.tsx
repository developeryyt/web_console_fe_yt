import Header from "./header";
import Container from "./container";
import Footer from "./footer";
import Nav from "./nav";


const App = () => {
    return (
        <div className='app'>
            <Header />
            <Nav />
            <Container>
                <></>
            </Container>
            <Footer />
        </div>
    );
};

export default App;
