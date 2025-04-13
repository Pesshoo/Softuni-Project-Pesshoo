import { useNavigate, useParams } from "react-router";
import { useAd, useCreateAd, useEdit } from "../../api/adsApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNotification } from "../notifications/Notifications";

export default function EditAd() {
    const { idAd } = useParams();
    const { editAd } = useEdit();
    const { _id } = useContext(UserContext)
    const navigate = useNavigate()
    const {showNotification} = useNotification();

    const { ad } = useAd(idAd);

    function editClickHandler(formData){

        let adData = Object.fromEntries(formData);

        adData = {
            ...adData,
            _ownerId: _id,
          }

          try {
            editAd(idAd, adData);

            navigate(`/ads/${idAd}/details`)

            showNotification("The ad was edited successfully!", "success");
            
          } catch (err) {
            showNotification(err.message, "error");
          }

    }
    
    return (
        <div className="ad-box">
        <h2>Редактиране На Обява</h2>
        <form className="ad-form" action={editClickHandler}>
          <label htmlFor="title">Име на продукта</label>
          <input type="text" id="title" name="title" defaultValue={ad.title} placeholder="Пример: BMW Е36" required/>
    
          <label htmlFor="price">Цена (лв)</label>
          <input type="number" id="price" name="price" defaultValue={ad.price} placeholder="Пример: 5000" required/>
    
          <label htmlFor="description">Описание</label>
          <textarea id="description" name="description" defaultValue={ad.description} placeholder="Въведи описание..." rows="4" required></textarea>
    
          <label htmlFor="category">Категория</label>
          <select id="category" name="category"  defaultValue={ad.category} required>
            <option value="">Избери категория</option>
            <option value="cars">Автомобили</option>
            <option value="tech">Техника</option>
            <option value="fashion">Мода</option>
            <option value="services">Услуги</option>
            <option value="other">Друго</option>
          </select>
    
          <label htmlFor="image">Снимка</label>
          <input type="text" id="image" name="imageUrl" defaultValue={ad.imageUrl} placeholder="Линк..." required/>
    
          <button type="submit">Редактирай обявата</button>
        </form>
      </div>
    )}