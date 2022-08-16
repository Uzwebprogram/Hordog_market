import Reklama from "../../../common/Reklama"
import { Wrapper , WrapperMedia } from "./styled-index"
import BannerSpary from "./../../../../assets/images/home/reklama/BannerSpray.png"
import BannerSparyUz from "./../../../../assets/images/home/reklama/BannerSprayUz.png"
import BannerSparyRu from "./../../../../assets/images/home/reklama/BannerSprayRu.png"
import BannerSparyEn from "./../../../../assets/images/home/reklama/BannerSprayEn.png"
import BannerSpary2 from "./../../../../assets/images/home/reklama/BannerSpary2.png"
import BannerSpary2Uz from "./../../../../assets/images/home/reklama/BannerSparyUz2.png"
import BannerSpary2Ru from "./../../../../assets/images/home/reklama/BannerSpary2Ru.png"
import BannerSpary2En from "./../../../../assets/images/home/reklama/BannerSpray2En.png"
import Sliders from "../../../common/Slider"
const TooBannerComponent = () =>{
    return(
        <>
                <Wrapper>
            <div>
            <Reklama 
         ruBanner={<img src={BannerSpary} alt="Reklama" />}
         uzBanner={<img src={BannerSpary} alt="Reklama" />}
         enBanner={<img src={BannerSpary} alt="Reklama" />}
         ruMediaBanner={<img src={BannerSparyRu} alt="Reklama"/>}
         uzMediaBanner={<img src={BannerSparyUz} alt="Reklama" />}
         enMediaBanner={<img src={BannerSparyEn} alt="Reklama"/>}
         />
            </div>
            <div>
            <Reklama 
         ruBanner={<img src={BannerSpary2} alt="Reklama" />}
         uzBanner={<img src={BannerSpary2} alt="Reklama" />}
         enBanner={<img src={BannerSpary2} alt="Reklama" />}
         ruMediaBanner={<img src={BannerSpary2Ru} alt="Reklama"/>}
         uzMediaBanner={<img src={ BannerSpary2Uz} alt="Reklama" />}
         enMediaBanner={<img src={BannerSpary2En} alt="Reklama"/>}
         />
            </div>
        </Wrapper>
        <WrapperMedia>
        <Sliders Speed={3000}>
        <Reklama 
         ruBanner={<img src={BannerSpary} alt="Reklama" />}
         uzBanner={<img src={BannerSpary} alt="Reklama" />}
         enBanner={<img src={BannerSpary} alt="Reklama" />}
         ruMediaBanner={<img src={BannerSparyRu} alt="Reklama"/>}
         uzMediaBanner={<img src={BannerSparyUz} alt="Reklama" />}
         enMediaBanner={<img src={BannerSparyEn} alt="Reklama"/>}
         />
                     <Reklama 
         ruBanner={<img src={BannerSpary2} alt="Reklama" />}
         uzBanner={<img src={BannerSpary2} alt="Reklama" />}
         enBanner={<img src={BannerSpary2} alt="Reklama" />}
         ruMediaBanner={<img src={BannerSpary2Ru} alt="Reklama"/>}
         uzMediaBanner={<img src={ BannerSpary2Uz} alt="Reklama" />}
         enMediaBanner={<img src={BannerSpary2En} alt="Reklama"/>}
         />
        </Sliders>
        </WrapperMedia>
        </>
    )
}
export default TooBannerComponent