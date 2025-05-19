import Header from "../../components/Header";
import CronogramaBody from "../../sections/CronogramaBody";
import CornogramaIntro from "../../sections/CronogramaIntro";
import CronogramaIntro from "../../sections/CronogramaIntro/index";
import Footer from "../../components/Footer";

const Cronograma = () => {
    return(
        <>
            <Header />
            <CronogramaIntro />
            <CronogramaBody />
            <Footer />
            
        </>
    );
};

export default Cronograma