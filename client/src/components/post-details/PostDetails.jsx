import { Link, useNavigate, useParams } from "react-router";
import { useAd, useDelete } from "../../api/adsApi";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import AdComments from "./AdComments";
import { useNotification } from "../notifications/Notifications";

export default function PostDetails() {
  const navigate = useNavigate();
  const { idAd } = useParams();
  const {_id} = useContext(UserContext);
  const { removeAd } = useDelete();
  const { showNotification } = useNotification();

  const { ad } = useAd(idAd);

  const deleteClickHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete ${ad.title}`)

    if (!hasConfirm){
     return;
    }

    try {

      await removeAd(idAd)

      navigate('/catalog');

      showNotification("Tou succesfully delete your ad!", "success");

    } catch (err) {
      showNotification(err.message, "error");
    }
    };
  
  
    return (
      <>
      <div className="product-container">
        <div className="product-image-container">
          <img src={ad.imageUrl} alt={ad.title} />
        </div>
        <div className="product-info">
          <h1 className="product-name">{ad.title}</h1>
          <p className="product-category-text">Категория: {ad.category}</p>
          <p className="product-price-text">Цена: <span>{ad.price} лв</span></p>
          <p className="product-description-text">{ad.description}</p>

          {_id === ad._ownerId ? (
            <>
              <Link className="add-to-cart-button" to={`/ads/${idAd}/edit`}>Редактиране</Link>
              <button className="add-to-cart-button" onClick={deleteClickHandler}>Изтриване</button>
            </>
          ) : (
            <>
              <button className="add-to-cart-button">Добави в количката</button>
            </>
          )}

          <AdComments/>
          
        </div>
      </div>
    </>
    )
}