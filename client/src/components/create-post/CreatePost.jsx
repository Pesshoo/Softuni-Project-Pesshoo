import { useNavigate } from "react-router";
import { useCreateAd } from "../../api/adsApi";

export default function CreatePost() {
  const navigate = useNavigate()
  const {create} = useCreateAd();
  const submitAction = async (formData) => {

    const adData = Object.fromEntries(formData);

    console.log(adData);
    

    const result = await create(adData);

    console.log(result);

    navigate('/catalog')
    
  }
    return (
        <div class="ad-box">
        <h2>Създай Обява</h2>
        <form class="ad-form" action={submitAction}>
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
    
          <label htmlFor="image">Снимка</label>
          <input type="text" id="image" name="imageUrl" placeholder="Линк..." required/>
    
          <button type="submit">Създай обява</button>
        </form>
      </div>
    )
}