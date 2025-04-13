import { useNavigate } from "react-router";
import { useCreateAd } from "../../api/adsApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function CreatePost() {
  const navigate = useNavigate()
  const {create} = useCreateAd();
  const { _id } = useContext(UserContext);
  const submitAction = async (formData) => {

    let adData = Object.fromEntries(formData);

    adData = {
      ...adData,
      _ownerId: _id,
    }

    try {

      const result = await create(adData);

      console.log(result);
      

      navigate('/catalog')

      showNotification("The ad was created succesfully!", "success");
      
    } catch (err) {
      showNotification(err.message, "error");
    }
    
    
  }
    return (
        <div className="ad-box">
        <h2>Създай Обява</h2>
        <form className="ad-form" action={submitAction}>
          <label htmlFor="title">Име на продукта</label>
          <input type="text" id="title" name="title" placeholder="Пример: BMW Е36" required/>
    
          <label htmlFor="price">Цена (лв)</label>
          <input type="number" id="price" name="price" placeholder="Пример: 5000" required/>
    
          <label htmlFor="description">Описание</label>
          <textarea id="description" name="description" placeholder="Въведи описание..." rows="4" required></textarea>
    
          <label htmlFor="category">Категория</label>
          <select id="category" name="category" required>
            <option value="">Избери категория</option>
            <option value="cars">Автомобили</option>
            <option value="tech">Техника</option>
            <option value="fashion">Мода</option>
            <option value="services">Услуги</option>
            <option value="other">Друго</option>
          </select>

          <label htmlFor="condition">Състояние</label>
          <select id="condition" name="condition" required>
            <option value="new">Ново</option>
            <option value="used">Използвано</option>
          </select>
    
          <label htmlFor="image">Снимка</label>
          <input type="text" id="image" name="imageUrl" placeholder="Линк..." required/>
    
          <button type="submit">Създай обява</button>
        </form>
      </div>
    )
}