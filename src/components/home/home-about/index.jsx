import Reklama from "../../common/Reklama"
import TooBannerComponent from "./too-banner"
import BannerRu from "./../../../assets/images/home/reklama/BannerRu.png"
import BannerUz from "./../../../assets/images/home/reklama/BannerUz.png"
import BannerEn from "./../../../assets/images/home/reklama/BannerEn.png"
import BannerMediaRu from "./../../../assets/images/home/reklama/BannerMediaRu.svg"
import BannerMediaUz from "./../../../assets/images/home/reklama/BannerMediaUz.svg"
import BannerMediaEn from "./../../../assets/images/home/reklama/BannerMediaEn.svg"
import XitComponent from "./xit-component/index"

const HomeAbout = ()=>{

    return(
        <>
        <Reklama 
         ruBanner={<img src={BannerRu} alt={BannerRu} />}
         uzBanner={<img src={BannerUz} alt={BannerUz} />}
         enBanner={<img src={BannerEn} alt={BannerEn} />}
         ruMediaBanner={<img src={BannerMediaRu} alt={BannerMediaRu}/>}
         uzMediaBanner={<img src={BannerMediaUz} alt={BannerMediaUz} />}
         enMediaBanner={<img src={BannerMediaEn} alt={BannerMediaEn} />}
         />
        <XitComponent/>
        <TooBannerComponent/>         
        </>
    )
}
export default HomeAbout