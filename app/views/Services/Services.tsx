import DiscographySlide from "./slides/DiscographySlide";
import EditorialSlide from "./slides/Editorial";
import ManagementSlide from "./slides/MgmtSlide";
import ProductionSlide from "./slides/ProductionSlide";

const Services = () => {
    return (
        <div className="flex flex-col relative">
            <h2 className="absolute top-20 left-15 font-anton text-[40px]">
                NUESTROS SERVICIOS
            </h2>
            <EditorialSlide />
            <ProductionSlide />
            <ManagementSlide />
            <DiscographySlide />
        </div>
    );
};
export default Services;
