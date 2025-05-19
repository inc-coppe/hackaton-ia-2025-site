import Header from "../../components/Header";
import RegulamentoBody from "../../sections/RegulamentoBody";
import RegulamentoIntro from "../../sections/RegulamentoIntro";
import Footer from "../../components/Footer";

const Regulamento = () => {
    return(
        <>
            <Header />
            <RegulamentoIntro/>
            <RegulamentoBody />
            <Footer />
        </>
    );
};

export default Regulamento;