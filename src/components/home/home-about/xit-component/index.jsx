
import Cards from "../../.././common/card/index"
import Sliders from "../../../common/Slider/index"
import XitProduct from "./../../../../data/xit-product.json"
const XitComponent = ()=>{
    function getValue() {
        return localStorage.getItem('i18nextLng');  
    }
    return(
        <>
                 <Sliders title="Хиты" Speed={2000}>
         {getValue() === "uz" ? XitProduct.map((elem)=>
         <>
         <Cards aksiya={elem.ProductSkidka} news={elem.ProductNewsUz} title={elem.ProductNameUz} aksiya_price={elem.aksiya_priceUz} price={`${elem.priceUz} ming so'm`}  CardImage={elem.ProductImage}/>
         </>):
          getValue() === "ru" ? XitProduct.map((elem)=>
          <>
          <Cards aksiya={elem.ProductSkidka} news={elem.ProductNewsRu} title={elem.ProductNameRu} aksiya_price={elem.aksiya_priceRu} price={`${elem.priceRu} ₽`}  CardImage={elem.ProductImage}/>
          </>):
          getValue() === "en" ?XitProduct.map((elem)=>
          <>
          <Cards aksiya={elem.ProductSkidka} news={elem.ProductNewsEn} title={elem.ProductNameEn} aksiya_price={elem.aksiya_priceEn} price={`${elem.priceEn} $`}  CardImage={elem.ProductImage}/>
          </>):
          null}
         </Sliders>
        </>
    )
}
export default XitComponent