import { useParams } from "react-router";
import { useAd } from "../../api/adsApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function PostDetails() {
  const { idAd } = useParams();
  const {_id} = useContext(UserContext);

  const { ad } = useAd(idAd);

  console.log(_id);
  

  console.log(ad._ownerId);
  
  
    return (
        <div class="product-container">
    <div class="product-image-container">
      <img src={ad.imageUrl} alt={ad.title}/>
    </div>
    <div class="product-info">
      <h1 class="product-name">{ad.title}</h1>
      <p class="product-category-text">Категория: {ad.category}</p>
      <p class="product-price-text">Цена: <span>{ad.price} лв</span></p>
      <p class="product-description-text">
        {ad.description}
      </p>
      {_id == ad._ownerId 
        ? <>
            <button class="add-to-cart-button">Редактиране</button>
            <button class="add-to-cart-button">Изтриване</button>
          </>
        : <>
            <button class="add-to-cart-button">Добави в количката</button>
          </>  
      }
    </div>
  </div>
    )
}