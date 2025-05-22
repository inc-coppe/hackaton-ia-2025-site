import Header from "../../components/Header";
import DesafiosIntro from "../../sections/DesafiosIntro/index.tsx";
import DesafiosBody from "../../sections/DesafiosBody/index.tsx";
import Footer from "../../components/Footer";

const Desafios = () => {
    return(
        <>
            <Header />
            <DesafiosIntro />
            <DesafiosBody />
            <Footer />
        </>
    );
};

export default Desafios;