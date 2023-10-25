import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/360_F_320461388_5Snqf6f2tRIqiWla.png"
import banner2 from "../../assets/banner-template.png"
import banner3 from "../../assets/banner2.png"
// for this page I use "react-responsive-carousel"
import banner4 from "../../assets/shopping-time-banner-with-realis.png"

const BannerSection = () => {
  return (
    <div className="w-full">
      <Carousel infiniteLoop autoPlay interval={3000}>
        <div className="w-full  h-[70vh]">
          <img src={banner1} alt="Image 1" className="w-full h-auto" />
        </div>
        <div className="w-full h-[70vh]">
          <img src={banner2} alt="Image 2" className="w-full h-auto" />
        </div>
        <div className="w-full h-[70vh]">
          <img src={banner3} alt="Image 3" className="w-full h-auto" />
        </div>
        <div className="w-full h-[70vh]">
          <img src={banner4} alt="Image 4" className="w-full h-auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSection;
