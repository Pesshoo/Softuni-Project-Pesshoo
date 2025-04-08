import { Link, useNavigate, useParams } from "react-router";
import { useAd, useDelete } from "../../api/adsApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function PostDetails() {
  const navigate = useNavigate();
  const { idAd } = useParams();
  const {_id} = useContext(UserContext);
  const { removeAd } = useDelete();

  const { ad } = useAd(idAd);

  const deleteClickHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete ${ad.title}`)

    if (!hasConfirm){
     return;
    }

    await removeAd(idAd)

    navigate('/catalog');
 }
  
  
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
            <Link class="add-to-cart-button" to={`/ads/${idAd}/edit`}>Редактиране</Link>
            <button class="add-to-cart-button" onClick={deleteClickHandler}>Изтриване</button>
          </>
        : <>
            <button class="add-to-cart-button">Добави в количката</button>
          </>  
      }
    </div>
  </div>
    )
}